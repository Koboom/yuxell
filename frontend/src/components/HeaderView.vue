<!-- <script>
    import { mapActions } from "pinia"
    import { useCounterStore } from "../stores/counter"

    export default {
        data() {
            return {
                kunden: [],
                isLoading: true
            }
        },
        async mounted() {
            this.kunden = await this.fetchKunden()
            this.isLoading = false
        },
        methods: {
            ...mapActions(useCounterStore,["fetchKunden"])
        }
    }

</script>

<template>
    <div class="container-fluid p-5 bg-primary text-white text-center">
        <p v-if="isLoading">Please wait...</p>
        <div v-else class="container mt-5"><i class="fa fa-comment w3-xxxlarge"></i></div>
            <div class="w3-right">
                <h3>{{ kunden.length }}</h3>
            </div>
        <div class="w3-clear"></div>
            <h4>Kunden</h4>
    </div>

</template>
<style></style> -->