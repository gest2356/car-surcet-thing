<script setup lang="ts">
import {useTileStore} from "../store/useTileStore.ts";
import {onMounted, onUnmounted, reactive, ref} from "vue";

const store = useTileStore();
const selectedPixel = ref(0);

interface Tile {
  img: string;
  rotation: number;
}

const placedTiles = reactive<Record<number, Tile>>({});

const placeTile = (n: number) => {
  placedTiles[n] = {
  img:  store.storedTileIMG!,
  rotation: 0
  }
}

const rotateTile = (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === "r" && selectedPixel.value !== 0) {
    placedTiles[selectedPixel.value]!.rotation += 90
  }
}

onMounted(() => {
  window.addEventListener("keydown", rotateTile)
})

onUnmounted(() => {
  window.removeEventListener("keydown", rotateTile)
})

const canvasWidth = 25;
const canvasHeight = 25;
</script>

<template>
<div id="canvas-container">
  <div v-for="n in canvasHeight * canvasWidth"
       :key="n"
       class="pixel"
       :class="{ hovered: selectedPixel === n }"
       @mouseover="selectedPixel = n"
       @click="placeTile(n)"
       :style="{
         backgroundImage: placedTiles[n]
           ? `url(/src/assets/PalletComponentsIMGS/${placedTiles[n].img})`
           : 'none',
         transform: placedTiles[n]
           ? `rotate(${placedTiles[n].rotation}deg)`
           : 'rotate(0deg)',
         backgroundColor: placedTiles[n] ? 'transparent' : 'white'
       }"
  ></div>

</div>
</template>

<style scoped>
#canvas-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind(canvasWidth), 16px);
  grid-template-rows: repeat(v-bind(canvasHeight), 16px );
  gap: 1px;
}

.pixel {
  width: 16px;
  height: 16px;
  background-size: contain;
}

.hovered {
  border: 1px solid black;
}
</style>