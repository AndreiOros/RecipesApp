<template>
    <v-container>
        <v-btn text @click="$router.go(-1)">
            <v-icon>mdi-arrow-left</v-icon>
            Back
        </v-btn>
        <FlipCard :flipped="isFlipped">
            <template v-slot:front>
                <RecipeCardFront :recipe="recipe" />
            </template>
            <template v-slot:back>
                <RecipeCardBack :recipe="recipe" />
            </template>
        </FlipCard>
        <v-btn text @click="flipCard">
            <v-icon>mdi-arrow-left</v-icon>
            flip
        </v-btn>
    </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRecipesStore } from '@/stores/recipes.js'

import FlipCard from '@/components/Recipe/FlipCard.vue'
import RecipeCardFront from '@/components/Recipe/CardFront.vue'
import RecipeCardBack from '@/components/Recipe/CardBack.vue'

const store = useRecipesStore()

const isFlipped = ref(false)

const recipe = computed(() => (store.selectedRecipe ? store.selectedRecipe : {}))

const flipCard = () => {
    isFlipped.value = !isFlipped.value
}
</script>

<style scoped>
.tag {
    margin: 5px;
}
</style>
