<script>
    export default {
        inject: ["foods"]
    }
</script>

<template>
    <h4>Different Kinds of Food</h4>
    <div v-for="x in foods">
        <div class="w3-container">
            <img :src="x.imgUrl" alt="" style="width: 100%;">
            <p class="w3-center w3-margin w3-black w3-round">{{ x.name }}</p><hr>
        </div>
    </div>
</template>

<style></style>