<template>
    <v-card height="300px">
        <v-img :src="recipe.strMealThumb" height="100px"></v-img>
        <v-card-title>{{ recipe.strMeal }}</v-card-title>
        <v-card-section>
            <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
        </v-card-section>
        <v-card-actions>
            <v-btn color="primary" text>View Recipe</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    recipe: Object
})
const tags = computed(() => {
    return props.recipe.strTags.split(',');
})
console.log(props.recipe);
</script>