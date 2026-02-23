<script setup lang="ts">
import {ref} from "vue";

const x = ref(25)
const y = ref(25)

const emit = defineEmits<{
  (e: 'gridSize', x: number, y: number): void
}>()

function changeGridSize() {
  emit('gridSize', x.value, y.value)
}
</script>

<template>
<div>
  <input type="number" id="X" v-model="x" />
  <input type="number" id="Y"  v-model="y"/>
  <button id="submit-button" type="submit" @click="changeGridSize">change</button>
</div>
</template>

<style scoped>

</style>