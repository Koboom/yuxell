<!-- frontend/src/components/RegisterForm.vue -->

<template>
    <form @submit.prevent="registerUser">
      <label for="username">Username: </label>
      <input v-model="username" type="text" required><br>

      <label for="email">E-posta:</label>
      <input v-model="email" type="email" required><br>

      <label for="password">Şifre:</label>
      <input v-model="password" type="password" required><br>

      <button type="submit">Kayıt Ol</button>
    </form>
  </template>

  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      registerUser() {
        // Kullanıcıyı kaydetmek için backend servisini çağırın
        // Axios veya fetch gibi bir HTTP kütüphanesi kullanabilirsiniz
      },
    },
  };
  </script>
