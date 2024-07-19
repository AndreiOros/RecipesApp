import { defineStore, acceptHMRUpdate  } from 'pinia'
import api from '../api/api.js'

export const useRecipesStore = defineStore('recipes', {
    state: () => ({
        recipes: [],
        selectedRecipe: null,
        randomRecipe: null
    }),

    getters: {
        getRecipes() {
            return this.recipes;
        },
    },

    actions: {
        async fetchRandomRecipe() {
            const response = await api.getRandomRecipe();
            this.randomRecipe = response.data.meals[0];
        },
    },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRecipesStore, import.meta.hot))
}