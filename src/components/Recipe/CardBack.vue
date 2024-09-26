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
                <v-card-text>
                    Steps: <br />
                    <ul>
                        <li v-for="step in recipe.analyzedInstructions[0].steps" :key="step">
                            {{ step.step }}
                        </li>
                    </ul>
                </v-card-text>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
const props = defineProps({
    recipe: Object
})
</script>
