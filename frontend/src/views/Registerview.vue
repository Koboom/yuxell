<script>

  export default {
    data() {
      return {
        userData: {
          fullName: null,
          userName: null,
          password: null
        }
      }
    },
    methods: {
      onSave() {
        console.log(this.userData)
        //1.11 de kaldım. userData yı backend de tanımlamayı dene.. db.json oluşturmuş bende kullanıcılar diye oluşturabilirim.
      }
    }
  }
</script>
<template>
    <div class="container mt-3">
        <h3>Üye Kayıt Formu</h3>

  <form action="#" class="was-validated" @submit="register">
    <div class="mb-3 mt-3">
      <label for="uname" class="form-label">Tam Adı:</label>
      <input type="text" v-model="userData.fullName" class="form-control" id="uname" placeholder="İsminizi girin" name="uname" required>
      <div class="valid-feedback">Onaylandı.</div>
      <div class="invalid-feedback">Lütfen boş alanları doldurun.</div>
    </div>
    <div class="mb-3 mt-3">
      <label for="nickname" class="form-label">Kullanıcı Adı:</label>
      <input type="text" v-model="userData.userName" class="form-control" id="uname" placeholder="Kullanıcı adı girin" name="uname" required>
      <div class="valid-feedback">Onaylandı.</div>
      <div class="invalid-feedback">Lütfen boş alanları doldurun.</div>
    </div>
    <div class="mb-3">
      <label for="pwd" class="form-label">Şifre:</label>
      <input type="password" v-model="userData.password" class="form-control" id="pwd" placeholder="Şifreyi girin" name="pswd" required>
      <div class="valid-feedback">Onaylandı.</div>
      <div class="invalid-feedback">Lütfen boş alanları doldurun.</div>
    </div>
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" id="myCheck"  name="remember" required>
      <label class="form-check-label" for="myCheck">Kabul ediyorum.</label>
      <div class="valid-feedback">Onaylandı.</div>
      <div class="invalid-feedback">Devam etmek için onaylayın.</div>
    </div>
    <!-- <RouterLink :to="{ name: 'LoginView'}">Giriş Yap</RouterLink>
    <RouterView></RouterView> -->
  <button type="submit" @click="onSave()" class="btn btn-primary">Kayıt ol</button>
    <span class="p-3">Zaten üyeyim</span>,
    <a href="http://localhost:5173/login" class="text-primary">Giriş Yap</a>
  </form>
</div>
</template>

<style></style>