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

const smartRoadChack = ref<boolean>(false);

const store = useTileStore();
const selectedPixel = ref(0);

function chackSmartRoadLeft(n: number) {

  //const tileLeft = store.placedTiles[n - 1]
  //const tileRight = store.placedTiles[n + 1]?.img
  const tileLeftBottom = store.placedTiles[n - props.canvasWidth +1]?.img
  const tileRightTop = store.placedTiles[n + props.canvasHeight + 1]?.img

  if (tileRightTop === 'RoadCurve.png' || tileRightTop === 'RoadStrait.png') {
    store.placedTiles[n+1] = {
      img:  'RoadInterSection.png',
      rotation: 0
    }
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
  if (tileLeftBottom === 'RoadCurve.png' || tileLeftBottom === 'RoadStrait.png'){
    store.placedTiles[n+1] = {
      img:  'RoadInterSection.png',
      rotation: 0
    }
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
  }
  }else {
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
  }
}

function chackSmartRoadRight(n: number) {

  //const tileLeft = store.placedTiles[n - 1]
  //const tileRight = store.placedTiles[n + 1]?.img
  const tileLeftBottom = store.placedTiles[n - props.canvasWidth -1]?.img
  const tileRightTop = store.placedTiles[n + props.canvasHeight - 1]?.img

  if (tileRightTop === 'RoadCurve.png' || tileRightTop === 'RoadStrait.png') {
    store.placedTiles[n-1] = {
      img:  'RoadInterSection.png',
      rotation: 0
    }
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
    if (tileLeftBottom === 'RoadCurve.png' || tileLeftBottom === 'RoadStrait.png'){
      store.placedTiles[n-1] = {
        img:  'RoadInterSection.png',
        rotation: 0
      }
      store.placedTiles[n] = {
        img:  store.storedTileIMG!,
        rotation: 0
      }
    }
  }else {
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
  }
}

function chackSmartDirtRight(n: number) {

  //const tileLeft = store.placedTiles[n - 1]
  //const tileRight = store.placedTiles[n + 1]?.img
  const tileLeftBottom = store.placedTiles[n - props.canvasWidth -1]?.img
  const tileRightTop = store.placedTiles[n + props.canvasHeight - 1]?.img

  if (tileRightTop === 'DirtCurve.png' || tileRightTop === 'DirtStrait.png') {
    store.placedTiles[n-1] = {
      img:  'DirtInterSection.png',
      rotation: 0
    }
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
    if (tileLeftBottom === 'DirtCurve.png' || tileLeftBottom === 'DirtStrait.png'){
      store.placedTiles[n-1] = {
        img:  'DirtInterSection.png',
        rotation: 0
      }
      store.placedTiles[n] = {
        img:  store.storedTileIMG!,
        rotation: 0
      }
    }
  }else {
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
  }
}

function chackSmartDirtLeft(n: number) {

  //const tileLeft = store.placedTiles[n - 1]
  //const tileRight = store.placedTiles[n + 1]?.img
  const tileLeftBottom = store.placedTiles[n - props.canvasWidth +1]?.img
  const tileRightTop = store.placedTiles[n + props.canvasHeight + 1]?.img

  if (tileRightTop === 'DirtCurve.png' || tileRightTop === 'DirtStrait.png') {
    store.placedTiles[n+1] = {
      img:  'DirtInterSection.png',
      rotation: 0
    }
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
    if (tileLeftBottom === 'DirtCurve.png' || tileLeftBottom === 'DirtStrait.png'){
      store.placedTiles[n+1] = {
        img:  'DirtInterSection.png',
        rotation: 0
      }
      store.placedTiles[n] = {
        img:  store.storedTileIMG!,
        rotation: 0
      }
    }
  }else {
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
  }
}
const placeTile = (n: number) => {

  if (smartRoadChack.value === true) {
    if (store.storedTileIMG === 'RoadCurve.png' || store.storedTileIMG === 'RoadStrait.png') {
      console.log('triggered road')
      chackSmartRoadLeft(n);
      chackSmartRoadRight(n)
    }
    if (store.storedTileIMG === 'DirtCurve.png' || store.storedTileIMG === 'DirtStrait.png') {
      console.log("triggers Dirt")
      chackSmartDirtLeft(n);
     chackSmartDirtRight(n);
    }
  } else {
    store.placedTiles[n] = {
      img:  store.storedTileIMG!,
      rotation: 0
    }
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
  <div id="smart-container">
    <label for="smart-chackbox">Smart Road (experimental):</label>
    <input type="checkbox" id="smart-chackbox" v-model="smartRoadChack">
  </div>
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