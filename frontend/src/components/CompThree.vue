<script>
    export default {
        name: "CompThree",
        data() {
            return {
                bgColor:""
            }
        }
    }
</script>

<template>
    <div class="w3-container w3-yellow w3-round">
        <h3>Component Three</h3>
        <p>Choose e new background-color</p>
        <input type="color" v-model="bgColor">
        <strong>{{ this.bgColor }}</strong>
    </div>
</template>

<style></style>