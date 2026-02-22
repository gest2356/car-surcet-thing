<script setup lang="ts">
import { ref } from 'vue'
import Menu from "./components/Menu.vue"

const showMenu = ref(true)
</script>

<template>
  <div id="app">
    <Menu v-if="showMenu" @close="showMenu = false" />
    <button @click="showMenu =true">Show Menu </button>

    <div id="drawing-components">

    </div>

  </div>
</template>

<style scoped>
  #app {
    background-color: blue;
  }
  button {
    background-color: red;
    padding-bottom: 500px ;
  }
</style>
