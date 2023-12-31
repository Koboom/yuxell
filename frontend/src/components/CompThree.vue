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
    <div class="y-container y-yellow y-round">
        <h3>Component Three</h3>
        <p>Choose e new background-color</p>
        <input type="color" v-model="bgColor">
        <strong>{{ this.bgColor }}</strong>
    </div>
</template>

<style></style>