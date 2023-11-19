import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/"

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  async function fetchKunden() {
    const request = await axios.get("/kunden")
    return request.data
  }
  async function fetchKunde(kundeId) {
    const request = await axios.get(`/kunden/${kundeId}`)
    return request.data
  }
  async function fetchDrivers() {
    const request = await axios.get("/drivers")
    return request.data
  }
  async function bookDriver( {kundeId, driverId, origin, destination} ) {
    const request = await axios.post(`/kunden/${kundeId}/bookings`, {
      driverId, origin, destination
    })
    return request.data
  }

  return { count, doubleCount, increment, fetchKunden, fetchKunde, fetchDrivers, bookDriver }
})
