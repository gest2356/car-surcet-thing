<script setup lang="ts">
import {useTileStore} from "../store/useTileStore.ts";

const store = useTileStore();

</script>

<template>
<div id="pallet-components">
   <div class="component" @click="store.setTile('RoadStrait.png', 'Road Strait')">
     <span class="component-title">Road Strait</span>
     <img src="./../assets/PalletComponentsIMGS/RoadStrait.png" alt="">
   </div>

   <div class="component" @click="store.setTile('RoadCurve.png', 'Road Curve')">
    <span class="component-title">Road Curve</span>
    <img src="./../assets/PalletComponentsIMGS/RoadCurve.png" alt="">
   </div>

   <div class="component" @click="store.setTile('RoadInterSection.png', 'Road InterSection')">
    <span class="component-title">Road Intersection</span>
     <img src="./../assets/PalletComponentsIMGS/RoadInterSection.png" alt="">
   </div>

  <div class="component" @click="store.setTile('DirtStrait.png', 'Dirt Strait')">
    <span class="component-title">Dirt Strait</span>
    <img src="./../assets/PalletComponentsIMGS/DirtStrait.png" alt="">
  </div>

  <div class="component" @click="store.setTile('DirtCurve.png', 'Dirt Curve')">
    <span class="component-title">Dirt Curve</span>
    <img src="./../assets/PalletComponentsIMGS/DirtCurve.png" alt="">
  </div>

  <div class="component" @click="store.setTile('DirtInterSection.png', 'Dirt InterSection')">
    <span class="component-title">Dirt Intersection</span>
    <img src="../assets/PalletComponentsIMGS/DirtInterSection.png" alt="">
  </div>

  <div class="component" @click="store.setTile('WaterBackground.png', 'Water Background')">
    <span class="component-title">Water Background</span>
    <img src="./../assets/PalletComponentsIMGS/WaterBackground.png" alt="">
  </div>

  <div class="component" @click="store.setTile('GrassBackground.png', 'Grass Background')">
    <span class="component-title">Grass Background</span>
    <img src="./../assets/PalletComponentsIMGS/GrassBackground.png" alt="">
  </div>

  <div class="component" @click="store.setTile('DirtBackground.png', 'Dirt Background')">
    <span class="component-title">Dirt Background</span>
    <img src="./../assets/PalletComponentsIMGS/DirtBackground.png" alt="">
  </div>
</div>
</template>

<style scoped>
.component img {
  width: 128px;
  height: 128px;
}
</style>