<script setup lang="ts">
import {useTileStore} from "../store/useTileStore.ts";

const emit = defineEmits(['close'])
const store = useTileStore();


function newSurcet() {
  emit('close')
  store.clearCanvas()
}
</script>

<template>
  <div id="menu-container">
    <div id="menu-content">
      <h1>Car surcet Thing</h1>
      <span>Make your dream surcet a reality</span>
      <button @click="newSurcet">New surcet</button>
    </div>
  </div>
</template>

<style scoped>
#menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(100px);
}

#menu-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2vw;
  background-color: gray;
}

</style>