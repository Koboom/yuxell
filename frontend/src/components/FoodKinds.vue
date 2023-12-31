<script>
    export default {
        inject: ["foods"]
    }
</script>

<template>
    <h4>Different Kinds of Food</h4>
    <div v-for="x in foods">
        <div class="y-container">
            <img :src="x.imgUrl" alt="" style="width: 100%;">
            <p class="y-center y-margin y-black y-round">{{ x.name }}</p><hr>
        </div>
    </div>
</template>

<style></style>