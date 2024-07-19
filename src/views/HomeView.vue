<template>
  <main class="container">
    <h1>Welcome to The Recipes App</h1>
    <div v-if="store.randomRecipe">
      <RecipeCard :recipe="store.randomRecipe" />
    </div>
  </main>
</template>

<script setup>
import {onBeforeMount} from 'vue';
import { useRecipesStore } from '@/stores/recipes.js';

import RecipeCard from '@/components/RecipeCard.vue';

const store = useRecipesStore();

onBeforeMount(() => {
  store.fetchRandomRecipe();
})

</script>

<style scoped>
.container {
  display: flex;
    height: 100vh;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

}
</style>
