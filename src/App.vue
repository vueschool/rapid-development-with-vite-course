<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "@/components/HelloWorld.vue";
import styles from "./assets/example.module.css";
const developerMood: string = "Thrilled for Typescript!";
console.log(import.meta.env);
</script>

<template>
  <img alt="Vue logo" src="./assets/tiny-vue-logo.png" />
  <h1 :class="styles.example">Hello CSS Modules</h1>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
