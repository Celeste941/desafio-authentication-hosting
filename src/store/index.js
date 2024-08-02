import { createStore } from "vuex";
import { auth, signInWithEmailAndPassword, signOut } from "../config/firebaseConfig.js";
import router from "@/router/index.js";

export default createStore({
  state: {
    loggedUser: null,
  },
  mutations: {
    setLoggedUser(state, user) {
      state.loggedUser = user;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const loginResponse = await signInWithEmailAndPassword(auth, email, password);
        commit("setLoggedUser", loginResponse.user);
        router.push("/home");
      } catch (error) {
        throw new Error('Email o contraseña incorrectos');
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit("setLoggedUser", null);
        router.push("/");
        console.log("Sesión cerrada con éxito");
      } catch (error) {
        console.log("Error al cerrar sesión", error);
      }
    },
  },
});
