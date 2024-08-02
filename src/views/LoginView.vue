<template>
  <section class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit" class="form">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" placeholder="Ingrese su correo..." class="input" required />
      <label for="password">Contraseña</label>
      <input id="password" v-model="password" type="password" placeholder="Ingrese su contraseña..." class="input"
        required />
      <button type="submit" class="button">Iniciar sesión</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", 
    };
  },
  methods: {
    ...mapActions(["login"]),
    async handleSubmit() {
      this.errorMessage = ""; 

      try {
        await this.login({ email: this.email, password: this.password });
      } catch (error) {
        this.errorMessage = error.message || 'Email o contraseña incorrectos. Inténtalo de nuevo.';
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.input {
  margin: 10px 0;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  background: #f9f9f9;
}

.button {
  background: linear-gradient(to right, #00bcd4, #4db6ac);
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

.button:hover {
  background: linear-gradient(to right, #00a2c4, #39a7a1);

}

.error-message {
  color: #d9534f;
  margin-top: 10px;
  font-size: 14px;
}
</style>
