<template>
  <section class="form-container">
    <h2>Registro</h2>
    <form @submit.prevent="register" class="form">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" placeholder="Ingrese su correo..." class="input" required />
      <label for="password">Contraseña</label>
      <input id="password" v-model="password" type="password" placeholder="Ingrese su contraseña..." class="input"
        required />
      <button type="submit" class="button">Registrarse</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </section>
</template>

<script>
import {
  auth,
  createUserWithEmailAndPassword,
} from "../config/firebaseConfig.js";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.message = "Registro exitoso. Redirigiendo al login...";
        setTimeout(() => {
          this.$router.push("/");
        }, 2000); // Espera 2 segundos antes de redirigir
      } catch (error) {
        this.message = "Error en el registro: " + error.message;
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
  /* Bordes redondeados */
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

.button:hover {
  background: linear-gradient(to right, #00a2c4, #39a7a1);
}
</style>
