<script setup lang="ts">
import { ref } from 'vue'
import Menu from "./components/Menu.vue"
import SurcetPallet from "./components/SurcetPallet.vue";
import CurrentlySelectedTile from "./components/CurrentlySelectedTile.vue";
import DrawingCanvas from "./components/DrawingCanvas.vue";
import CanvasSizeMenu from "./components/CanvasSizeMenu.vue";

const showMenu = ref(true)

function changeGridSize(x: number, y: number) {
  gridWidth.value = x
  gridHeight.value = y
}

let gridWidth = ref<number>(25)
let gridHeight = ref<number>(25)

</script>

<template>
  <div id="app">
    <Menu v-if="showMenu" @close="showMenu = false" />
    <button @click="showMenu =true">Show Menu </button>

    <div id="drawing-components">
      <SurcetPallet />
      <CurrentlySelectedTile />
      <DrawingCanvas :canvasWidth="gridWidth" :canvasHeight="gridHeight" />
      <CanvasSizeMenu @grid-size="changeGridSize" />

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
