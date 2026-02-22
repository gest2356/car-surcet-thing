<script setup lang="ts">
const emit = defineEmits(['close'])

function closeMenu() {
  emit('close')
}
</script>

<template>
  <div id="menu-container">
    <div id="menu-content">
      <h1>Car surcet Thing</h1>
      <span>Make your dream surcet a reality</span>
      <button @click="closeMenu">New surcet</button>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
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