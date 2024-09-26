<template>
    <v-card class="card">
        <transition name="flip" mode="out-in">
            <div v-bind:key="flipped" class="card-content">
                <slot v-if="!flipped" name="front"></slot>
                <slot v-else name="back"></slot>
            </div>
        </transition>
    </v-card>
</template>

<script setup>
const props = defineProps({
    flipped: Boolean
})
</script>

<style scoped>
.card {
    width: 1000px;
    height: 1000px;
    perspective: 1000px;
}
.card-content {
    transition: transform 0.5s;
    transform-style: preserve-3d;
    position: relative;
}
.flip-enter-active,
.flip-leave-active {
    transition: transform 0.5s;
}
.flip-enter,
.flip-leave-to {
    transform: rotateY(180deg);
}
</style>
