<script setup lang="ts">
import {useTileStore} from "../store/useTileStore.ts";
import {onMounted, onUnmounted, ref} from "vue";

function removeTile(n: number) {
  if (store.placedTiles[n]){
   delete store.placedTiles[n];
  }else {
    return
  }
}

const store = useTileStore();
const selectedPixel = ref(0);


const placeTile = (n: number) => {
  store.placedTiles[n] = {
  img:  store.storedTileIMG!,
  rotation: 0
  }
}

const rotateTile = (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === "r" && selectedPixel.value !== 0) {
    store.placedTiles[selectedPixel.value]!.rotation += 90
  }
}

onMounted(() => {
  window.addEventListener("keydown", rotateTile)
})

onUnmounted(() => {
  window.removeEventListener("keydown", rotateTile)
})

const props = withDefaults(
    defineProps<{
      canvasWidth?: number
      canvasHeight?: number
    }>(),
    {
      canvasWidth: 25,
      canvasHeight: 25
    }
)

</script>

<template>
<div id="canvas-container">
  <div v-for="n in props.canvasHeight * props.canvasWidth"
       :key="n"
       class="pixel"
       :class="{ hovered: selectedPixel === n }"
       @mouseover="selectedPixel = n"
       @click="placeTile(n)"
       @dblclick="removeTile(n)"
       :style="{
         backgroundImage: store.placedTiles[n]
           ? `url(/src/assets/PalletComponentsIMGS/${store.placedTiles[n].img})`
           : 'none',
         transform: store.placedTiles[n]
           ? `rotate(${store.placedTiles[n].rotation}deg)`
           : 'rotate(0deg)',
         backgroundColor: store.placedTiles[n] ? 'transparent' : 'white'
       }"
  ></div>

</div>
</template>

<style scoped>
#canvas-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind(props.canvasWidth), 64px);
  grid-template-rows: repeat(v-bind(props.canvasHeight), 64px );
  gap: 1px;
}

.pixel {
  width: 64px;
  height: 64px;
  background-size: contain;
}

.hovered {
  border: 1px solid black;
}
</style>