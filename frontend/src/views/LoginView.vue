<script></script>
<template>
    <div class="container mt-3">
        <h3>Giriş Formu</h3>

  <form action="#" class="was-validated">
    <div class="mb-3 mt-3">
      <label for="uname" class="form-label">Kullanıcı Adı:</label>
      <input type="text" class="form-control" id="uname" placeholder="Kullanıcı adı giriniz" name="uname" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Lütfen boş alanları doldurun.</div>
    </div>
    <div class="mb-3">
      <label for="pwd" class="form-label">Şifre:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Şifreyi girin" name="pswd" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Lütfen boş alanları doldurun.</div>
    </div>
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" id="myCheck"  name="remember" required>
      <label class="form-check-label" for="myCheck">Kabul et.</label>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Devam etmek için onaylayın.</div>
    </div>
  <button type="submit" class="btn btn-primary">Giris</button>
  </form>
</div>
</template>

<style></style>