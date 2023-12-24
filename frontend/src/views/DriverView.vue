<script>
    import { mapActions } from "pinia"
    import { useCounterStore } from "../stores/counter"

    export default {
        name: "DriverView",
        data() {
            return {
                isLoading: true,
                driver: {}
            }
        },
        async mounted() {
            this.driver = await this.fetchDriver(this.$route.params.driverId)
        },
        methods: {
            ...mapActions(useCounterStore,["fetchDriver"])
        }
    }


</script>

<template>
    <div class="container">
        <div>
            <h1 class="text-success">Driver Detail</h1>
            <p class="text-primary">Wellcome <span class="text-danger">{{ driver.name }}</span></p>
            <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo">More Detail</button>
            <div id="demo" class="collapse">

                        <div class="card" style="width: 400px;">
                            <img src="../components/icons/avatar2.png" class="card-img-top" alt="Card Image" style="width: 100%;">
                            <div class="card-body">
                                <h4 class="text-success card-title">{{ driver.name }}</h4>
                            </div>
                        </div>
                        <table class="table">
                                    <thead class="table-success">
                                        <tr>
                                        <th>Age</th>
                                        <th>Location</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>{{ driver.age }}</th>
                                            <th>{{ driver.location }}</th>
                                        </tr>
                                    </tbody>
                                </table>
                    </div>
        </div>

    </div>
</template>

