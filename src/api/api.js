import axios from 'axios'

const appKey = import.meta.env.VITE_APP_KEY

const api = {
    async getRandomRecipes() {
        return await axios.get(
            `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=11`,
            {
                headers: {
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': `${appKey}`
                }
            }
        )
    },
    async getRecipeDetails(id) {
        return await axios.get(
            `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
            {
                headers: {
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': `${appKey}`
                }
            }
        )
    }
}

export default api
