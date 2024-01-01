<script>
    import { mapActions } from 'pinia';
    import { useCounterStore } from '../stores/counter';

    export default {
        name: "Hotele",
        data() {
            return {
                isLoading: false,
                hotele: []
            }
        },
        async mounted() {
            this.hotele = await this.fetchHotele()
            this.isLoading = false
        },
        methods: {
            ...mapActions(useCounterStore, ["fetchHotele"])
        }
    }

</script>

<template>
    <div class="y-container">
        <p v-if="isLoading">Please wait...</p>
        <div v-else>
            <h1>Kunde Detail</h1>
            <p>There are {{ hotele.length }}</p>
            <ol>
                <li v-for="hotel in hotele">
                    {{ hotel.name }}
                </li>
            </ol>
        </div>


    </div>
</template>

<style></style>