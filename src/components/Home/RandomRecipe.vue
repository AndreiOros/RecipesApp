<template>
    <div class="recipes-container">
        <RecipeCard :recipe="store.randomRecipe" />
        <div>Random recipe of the day</div>
    </div>
</template>

<script setup>
import RecipeCard from '@/components/Home/RecipeCard.vue'

import { useRecipesStore } from '@/stores/recipes.js'

const store = useRecipesStore()
</script>

<style scoped>
.recipes-container {
    display: flex;
    text-align: center;
    flex-direction: column;
}
</style>
