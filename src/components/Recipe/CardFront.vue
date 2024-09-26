<template>
    <v-img :src="recipe.image" height="300px" cover></v-img>
    <div>
        <v-row>
            <v-card-title>{{ recipe.title }}</v-card-title>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-chip class="tag" v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
            </v-col>
            <v-col class="col-9">
                <v-card-text>{{ summary }}</v-card-text>
                <v-card-text>
                    Ingredients: <br />
                    <ul>
                        <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient">
                            {{ ingredient.original }}
                        </li>
                    </ul>
                </v-card-text>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    recipe: Object
})

const tags = computed(() => {
    return props.recipe.dishTypes
        .concat(props.recipe.occasions)
        .concat(props.recipe.diets)
        .concat(props.recipe.cuisines)
})

const summary = computed(() => {
    return props.recipe.summary.replace(/<[^>]*>?/gm, '')
})
</script>
