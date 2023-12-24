<script>
    import { mapActions } from "pinia"
    import { useCounterStore } from "../stores/counter"

    export default {
        name: "KundeView",
        data() {
            return {
                isLoading: true,
                kunde: {},
                drivers: [],
                destination:""
            }
        },
        async mounted() {
            await this.updateKunde()
            this.drivers = await this.fetchDrivers()
            this.isLoading = false
        },
        methods: {
            ...mapActions(useCounterStore, ["fetchKunde","fetchDrivers","bookDriver"]),
            async bookDriverAndUpdateKunde( {driverId, kundeId, origin, destination}) {
                await this.bookDriver({driverId, kundeId, origin, destination})
                this.destination=""
                this.updateKunde()
            },
            async updateKunde() {
                this.kunde = await this.fetchKunde(this.$route.params.kundeId) // id yi alıyorum
            }
        },
        watch: {
            'kunde.bookings' (bookings) {
                console.log("bookings updated", bookings)
            }
        }
    }
</script>

<template>
      <div class="container">
            <p v-if="isLoading">Please wait..</p>
            <div v-else>
                  <h1 class="text-success "> Kunde Details</h1>
                  <p class="text-primary">Wellcome <span class="text-danger">{{ kunde.name }}</span></p>

                  <button type="button" class="btn btn-primary w3-animate-opacity" data-bs-toggle="collapse" data-bs-target="#demo">More Detail</button>
                    <div id="demo" class="collapse">
                        <h2>Card Image</h2>

                        <div class="card" style="width: 400px;">
                            <img src="../components/icons/avatar2.png" class="card-img-top" alt="Card Image" style="width: 100%;">
                            <div class="card-body">
                                <h4 class="text-success card-title">{{ kunde.name }}</h4>
                            </div>
                        </div>
                        <table class="table">
                                <thead class="table-success">
                                    <tr>
                                        <th>Age</th>
                                        <th>EMail</th>
                                        <th>Location</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>{{ kunde.age }}</th>
                                            <th>{{ kunde.eMail }}</th>
                                            <th>{{ kunde.location }}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="container ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </div>
                    </div>

                    <hr>
                  <h2 class="text-success">Booking History</h2>
                  <div v-if="kunde.bookings.length">
                  <ol>
                        <li v-for="booking in kunde.bookings">from {{ booking.origin }} to {{ booking.destination }} with {{ booking.driver.name }} fahren.</li>
                  </ol>
            </div>
            <p v-else>No Booking yet.</p>
            <hr>
            <h2>Create new booking</h2>
            <p>Destination:&nbsp;
                  <input v-model="destination"  required/>
            </p>
              <div v-if="drivers.length">
            <h3 class="text-danger">Drivers ({{ drivers.length }} driver(s) wait...)</h3>
            <ol class="w3-ul">
               <li v-for="driver in drivers">{{ driver.name }}({{ driver.age }}) is waiting at {{ driver.location }}
                  <button class="btn badge bg-primary" @click="bookDriverAndUpdateKunde({ driverId: driver._id, kundeId: kunde._id, origin: kunde.location, destination})">
                        Book Driver
                  </button>
               </li>
            </ol>
        </div>
    </div>
</div>
</template>

<style>

</style>