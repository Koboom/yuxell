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
    <div class="y-container y-margin y-border y-green y-round-xlarge y-padding-16">
        <h2>Component</h2>
        <p>This is the component.</p>
        <ol ref="olEl"></ol>
    </div>
</template>

<style>

</style>