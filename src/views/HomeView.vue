<template>
    <main class="container">
        <h1>Welcome to The Recipes App</h1>
        <div v-if="store.randomRecipe">
            <RandomRecipe />
        </div>
        <div v-if="store.randomRecipe">
            <NewRecipes :recipes="store.recipes" />
        </div>
    </main>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useRecipesStore } from '@/stores/recipes.js'

import RandomRecipe from '@/components/Home/RandomRecipe.vue'
import NewRecipes from '@/components/Home/NewRecipes.vue'

const store = useRecipesStore()

onBeforeMount(() => {
    store.fetchRecipes()
})
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
}
</style>
