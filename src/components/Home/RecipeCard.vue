<template>
    <v-card class="card mx-auto">
        <v-img class="cover-img" :src="recipe.image" cover></v-img>
        <v-card-title class="mt-5">{{ recipe.title }}</v-card-title>
        <v-card-item class="card-tags-section">
            <v-chip class="tag" v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
        </v-card-item>
        <v-card-actions>
            <v-btn color="primary mx-auto" text @click="navigateToRecipeDetails">View Recipe</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useRecipesStore } from '@/stores/recipes.js'

const store = useRecipesStore()
const router = useRouter()
const props = defineProps({
    recipe: Object
})
const tags = computed(() => {
    return props.recipe.dishTypes
        .concat(props.recipe.occasions)
        .concat(props.recipe.diets)
        .concat(props.recipe.cuisines)
})

const navigateToRecipeDetails = async () => {
    const recipeName = props.recipe.title.split(' ').join('-')
    await store.fetchRecipeDetails(props.recipe.id)
    router.push({ name: 'recipe', params: { recipeName: recipeName } })
}
</script>

<style scoped>
.card {
    height: 400px;
    width: 300px;
    margin: 15px !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
}

.card-tags-section {
    margin-left: 10px;
}

.tag {
    margin-right: 5px;
    margin-top: 5px;
}

.cover-img {
    max-height: 150px;
    height: 100%;
}
</style>
