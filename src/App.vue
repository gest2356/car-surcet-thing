<script setup lang="ts">
import { ref } from 'vue'
import Menu from "./components/Menu.vue"
import SurcetPallet from "./components/SurcetPallet.vue";
import CurrentlySelectedTile from "./components/CurrentlySelectedTile.vue";

const showMenu = ref(true)
</script>

<template>
  <div id="app">
    <Menu v-if="showMenu" @close="showMenu = false" />
    <button @click="showMenu =true">Show Menu </button>

    <div id="drawing-components">
      <SurcetPallet />
      <CurrentlySelectedTile />
    </div>

  </div>
</template>

<style scoped>
  #app {
    background-color: #2c3e50;
    padding-bottom: 100%;

  }
  button {
    background-color: red;
  }
</style>
