<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            const liEl = document.createElement("li")
            liEl.innerHTML = "mounted"
            this.$refs.olEl.appendChild(liEl)
        },
        activated(){
            const liEl = document.createElement("li")
            liEl.innerHTML = "activated"
            this.$refs.olEl.appendChild(liEl)
        }

    }
</script>

<template>
    <div class="w3-container w3-margin w3-border w3-green w3-round-xlarge w3-padding-16">
        <h2>Component</h2>
        <p>This is the component.</p>
        <ol ref="olEl"></ol>
    </div>
</template>

<style>

</style>