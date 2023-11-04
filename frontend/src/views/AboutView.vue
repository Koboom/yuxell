<script setup>
  import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
  <div class="about">
    <h1>About Page</h1>
    <HelloWorld msg="This is Nazilli"/>
  </div>
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
