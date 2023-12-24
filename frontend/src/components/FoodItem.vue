<script>
    export default {
        props: ["foodName","foodDesc","isFavorite"],
        emits: ["toggle-favorite"],
        methods: {
            toggleFavorite() {
                this.$emit("toggle-favorite",this.foodName)
            }
        }
    }
</script>

<template>
    <div class="w3-container">
        <div class="w3-col">
            <div class="w3-half">
                <h2>{{ foodName }}</h2>
            </div>
            <div class="w3-half">
                <img src="./icons/img_quality.svg" style="height: 30px; float: right; margin: 5px;" alt="" v-show="isFavorite">
            </div>
        </div>
        <p>{{ foodDesc }}</p>
        <button class="w3-button w3-black" @click="toggleFavorite">favorite</button>
    </div>
</template>

<style></style>