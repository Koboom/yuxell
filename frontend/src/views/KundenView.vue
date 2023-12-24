<script>
    import { mapActions } from "pinia"
    import { useCounterStore } from "../stores/counter"
    // import { mapActions } from "vuex"

    export default {
        name: "Kunden",
        data() {
            return {
                isLoading: true,
                name: "",
                age:"",
                adresse:"",
                eMail:"",
                telNo:"",
                location:"",
                kunden: []
            }
        },
        async mounted() {
            this.kunden = await this.fetchKunden()
            this.isLoading = false
        },
        methods: {
            ...mapActions(useCounterStore, ["fetchKunden","fetchNewKunden","fetchDeleteKunde"])
        }

    }
</script>

<template>
    <div class="container">
        <div class="w3-container" >
            <h3>Add New Kunde</h3>
                <input type="text" placeholder="name..." v-model="name" required><br>
                <input type="text" placeholder="age..." v-model="age" required><br>
                <input type="text" placeholder="adresse..." v-model="adresse" ><br>
                <input type="text" placeholder="telNo..." v-model="telNo" ><br>
                <input type="text" placeholder="eMail..." v-model="eMail" ><br>
                <input type="text" placeholder="location..." v-model="location"><br><br>

                <button
                @click="fetchNewKunden( { name: name, age: age, adresse:adresse, eMail: eMail, telNo: telNo, location: location})">
                    Add New Kunde
                </button>
        </div>
        <h1 class="text-success"> Kunden</h1>
        <p v-if="isLoading"><span class="spinner-grow spinner-grow-sm "></span>
            Please Wait...
        </p>
        <div v-else>
            <p>There are <span class="badge bg-danger">{{ kunden.length }}</span> kunden</p>
            <ol>
                <li v-for="kunde in kunden" class="">
                    <a class="w3-btn w3-hover-gray w3-round-xlarge" :href="`/kunden/${kunde._id}`">{{ kunde.name }}</a>
                    <button @click="fetchDeleteKunde(kunde._id)" class="w3-button w3-black w3-round-large">Delete</button>
                </li>
            </ol>
        </div>
    </div>
</template>

<style></style>