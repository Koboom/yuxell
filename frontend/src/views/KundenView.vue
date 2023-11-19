<script>
    import { mapActions } from "pinia"
    import { useCounterStore } from "../stores/counter"
    // import { mapActions } from "vuex"

    export default {
        name: "Kunden",
        data() {
            return {
                isLoading: true,
                kunden: []
            }
        },
        async mounted() {
            this.kunden = await this.fetchKunden()
            this.isLoading = false
        },
        methods: {
            ...mapActions(useCounterStore, ["fetchKunden"])
        }

    }
</script>

<template lang="pug">
.home
  h1 Kunden
  p(v-if='isLoading') Please Wait...
  div(v-else='')
    p There are {{ kunden.length }} kunden

    ol
      li(v-for='kunde in kunden')
        a(:href="`/kunden/${kunde._id}`") {{ kunde.name }}

</template>

<style></style>