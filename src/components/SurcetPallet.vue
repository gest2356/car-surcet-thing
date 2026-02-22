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

</div>
</template>

<style scoped>
.component img {
  width: 32px;
  height: 32px;
}
</style>