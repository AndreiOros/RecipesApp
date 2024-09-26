<template>
    <div class="recipes-container">
        <v-sheet
            class="sheet mx-auto"
            max-width="800px"
            width="100%"
            max-height="500px"
            height="100%"
        >
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
                <v-slide-group-item v-for="(recipe, index) in recipes" :key="index">
                    <RecipeCard class="ma-4" :recipe="recipe" />
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
        <div>Take a look at this recipes!</div>
    </div>
</template>

<script setup>
import RecipeCard from '@/components/Home/RecipeCard.vue'

import { ref } from 'vue'

const props = defineProps({
    recipes: Array
})

const model = ref(null)
</script>

<style scoped>
.recipes-container {
    display: flex;
    text-align: center;
    flex-direction: column;
}
.sheet {
    background-color: #666666;
}
</style>
