<template>
  <section class="home-container">
    <h2>BIENVENIDO AL HOME</h2>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-container {
  background: linear-gradient(to bottom right, #e0f7fa, #b2ebf2);
  padding: 60px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
  position: relative;
}

h2 {
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(to right,#616161,#bdbdbd); 
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 10px;
  border-radius: 5px;
  display: inline-block; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); 
}
</style>
