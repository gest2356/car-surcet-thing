<script setup lang="ts">
import {useTileStore} from "../store/useTileStore.ts";

const store = useTileStore();
</script>

<template>
  <div id="currently-selected-tile">
    <div id="tile-selected">
      <span>{{store.storedTileName}}</span>
      <img :src="`/src/assets/PalletComponentsIMGS/${store.storedTileIMG}`" alt="dskk">
    </div> 
  </div>
</template>

<style scoped>
#tile-selected img{
  width: 32px;
  height: 32px;
}
</style>