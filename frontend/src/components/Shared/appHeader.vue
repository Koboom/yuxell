<script>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
    <div class="container-fluid ">
      <RouterLink class="navbar-brand text-warning" to="#">{ JS }</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/deneme">Deneme</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link" to="/hotele">Hotele</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/kunden">Kunden</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/drivers">Drivers</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/einstellung">Einstellung</RouterLink>
          </li>
        </ul>
      </div>

    </div>
  </div>
  <RouterView class="mt-3 p-3"></RouterView>
</template>