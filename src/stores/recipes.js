import { defineStore, acceptHMRUpdate } from 'pinia'
import api from '../api/api.js'

const getRandomRecipe = (recipes) => {
    const randomIndex = Math.floor(Math.random() * recipes.length)
    return [recipes[randomIndex], randomIndex]
}

export const useRecipesStore = defineStore('recipes', {
    state: () => ({
        recipes: [],
        selectedRecipe: null,
        randomRecipe: null,
        selectedRecipeId: null
    }),

    getters: {},

    actions: {
        async fetchRecipes() {
            if (this.recipes.length === 0) {
                const response = await api.getRandomRecipes()
                this.recipes = response.data.recipes

                const [randomRecipe, randomRecipeIndex] = getRandomRecipe(this.recipes)
                this.randomRecipe = randomRecipe

                this.recipes.splice(randomRecipeIndex, 1)
            }
        },
        async fetchRecipeDetails(id) {
            const response = await api.getRecipeDetails(id)
            this.selectedRecipe = response.data

            const recipeIndex = this.recipes.findIndex((recipe) => recipe.id === id)
            this.recipes[recipeIndex] = response.data
        },
        setSelectedRecipe(recipe) {
            this.selectedRecipe = recipe
        }
    },
    persist: true
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useRecipesStore, import.meta.hot))
}
