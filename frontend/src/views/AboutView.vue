<script>
import HelloWorld from "../components/HelloWorld.vue"

export default {
  name: "About",
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
.about
    h1 This is an about page <hr>
      HelloWorld(msg="This is Nazilli")
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
