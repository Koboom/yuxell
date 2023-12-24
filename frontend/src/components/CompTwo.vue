<script>
    export default {
        name:"CompTwo",
        data() {
            return {
                msg:""
            }
        }
    }
</script>

<template>
    <div class="w3-container w3-red">
        <h2>Component Two</h2>
        <input type="text" v-model="msg" placeholder="write something...">
        <p>Your message</p>
        <p><strong>{{ this.msg }}</strong></p>
    </div>
</template>

<style></style>