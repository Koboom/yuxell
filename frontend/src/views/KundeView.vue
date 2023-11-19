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
                this.updateKunde()
            },
            async updateKunde() {
                this.kunde = await this.fetchKunde(this.$route.params.kundeId)
            }
        },
        watch: {
            'kunde.bookings' (bookings) {
                console.log("bookings updated", bookings)
            }
        }
    }
</script>

<template lang="pug">
.kunde
    p(v-if="isLoading") Please wait..
    div(v-else)
        h1 Kunde Detail
        p {{ kunde.name }}

        h2 Booking History
        div(v-if="kunde.bookings.length")
            ol
              li(v-for="booking in kunde.bookings")
                 | from {{ booking.origin }} to {{ booking.destination }} with {{ booking.driver.name }} fahren.
        p(v-else) No Booking yet.

        h2 Create new booking
        p Destination:&nbsp;
            input(v-model="destination")
        div(v-if="drivers.length")
            h3 Drivers ({{ drivers.length }} driver(s) wait...)
            ol
                li(v-for="driver in drivers")
                    | {{ driver.name }}({{ driver.age }}) is waiting at {{ driver.location }}
                    button.book(@click="bookDriver({ driverId: driver._id, kundeId: kunde._id, origin: kunde.location, destination})") Book Driver
                    //- button.book(@click="bookDriver(driver._id, kunde._id, kunde.location, 'Kadiköy')") Book Driver


</template>

<style>
    .book {
        margin: 10px;
        padding: 5px;
        background-color: lightgreen;
    }
</style>