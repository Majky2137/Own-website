<script>
import Home from "./views/Home.vue";
import List from "./views/List.vue";

export default {
  name: "App",
  components: {
    Home,
    List
  }
};
</script>
<template>
  <router-view />
</template>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: baseline;
  color: #14141B;
  height: 100%;
  overflow-x: hidden;
}
body {
  margin: 0;
}
nav {
  position: fixed;
  display: flex;
  z-index: 3;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  height: 80px;
  font-family: "Poppins", sans-serif;
}

nav a {
  color: #ffffff;
  font-weight: 200;
  height: 100%;
  width: 80px;
  align-items: flex-end;
  position: relative;
  display: flex;
  padding: 20px;
  padding-right: 0;
  text-decoration: none;
  text-align: center;
  transition: all 0.4s ease-in-out;
}

nav a.router-link-exact-active {
  color: #ffffff;
  font-weight: 200;
  height: 100%;
  width: 60px;
  border-bottom: 6px solid #ffffff;
  background-color: #42b983;
  align-items: flex-end;
  position: relative;
  display: flex;
  padding: 20px;
}
nav a:hover {
  border-bottom: 6px solid #ffffff;
  color: #ffffff;
  font-weight: 200;
  height: 100%;
  width: 80px;
  background-color: #42b983;
  align-items: flex-end;
  position: relative;
  display: flex;
  padding: 20px;
}
</style>
