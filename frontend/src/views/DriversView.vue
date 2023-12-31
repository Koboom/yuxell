<script>
    import { mapActions }  from "pinia"
    import { useCounterStore } from "../stores/counter"

    export default {
        name: "Drivers",
        data() {
            return {
                isLoading: true,
                name:"",
                location: "",
                age:"",
                drivers: [],
                order:""
            }
        },
        async mounted() {
            this.drivers = await this.fetchDrivers()
            this.isLoading = false
        },
        methods: {
            ...mapActions(useCounterStore,["fetchDrivers", "fetchNewDriver"])
        }
    }

</script>

<template>
    <div class="container">
        <div class="driver">
            <div class="y-container">
                <h2>New Driver</h2>
                <input type="text" placeholder="name..." v-model="name"><br>
                <input type="text" placeholder="age..." v-model="age"><br>
                <input type="text" placeholder="location..." v-model="location"><br><br>

                <button class="y-green y-button y-round"
                @click="fetchNewDriver({ name: name, age: age, location: location})"
                >Add</button>
            </div><br>
            <h1 class="text-success">Drivers</h1>

            <p v-if="isLoading">Please wait...</p>
            <div v-else>
                <p>There are <span class="badge bg-danger">{{ drivers.length }}</span> drivers waiting.</p>

                <ol class="">
                    <li v-for="driver in drivers"
                    :key="driver.name"
                    >
                        <a class="btn" :href="`/drivers/${driver._id}`">{{ driver.name }}</a>
                    </li>
                </ol>

            </div>
        </div>
    </div>
</template>