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
    <div class="y-container">
        <div class="y-col">
            <div class="y-half">
                <h2>{{ foodName }}</h2>
            </div>
            <div class="y-half">
                <img src="./icons/img_quality.svg" style="height: 30px; float: right; margin: 5px;" alt="" v-show="isFavorite">
            </div>
        </div>
        <p>{{ foodDesc }}</p>
        <button class="y-button y-black" @click="toggleFavorite">favorite</button>
    </div>
</template>

<style></style>