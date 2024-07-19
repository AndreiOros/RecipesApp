import axios from 'axios';

const api = {
    async getRandomRecipe() {
        return axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    }
}

export default api;
