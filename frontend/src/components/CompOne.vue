<script>
    export default {
        name:"CompOne",
        data() {
            return {
                imgSrc: '../src/components/icons/img_apple.svg'
            }
        }
    }
</script>

<template>
    <div class="y-container y-blue y-round y-margin y-padding" style="overflow: hidden;">
        <img :src="imgSrc" alt="" style="width: 100px;">
        <h2>Component One</h2>
        <p>Choose food.</p>
        <label for="">
            <input type="radio" name="rbgFood" v-model="imgSrc" :value="'../src/components/icons/img_apple.svg'"> Apple
        </label>
        <label for="">
            <input type="radio" name="rbgFood" v-model="imgSrc" :value="'../src/components/icons/img_cake.svg'"> Cake
        </label>
    </div>

</template>

<style>
    #redDİv{
        background-color: coral;
        margin: 10px;
        padding: 10px;
        display: inline-block;
    }
</style>