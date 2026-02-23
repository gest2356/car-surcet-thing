<script setup lang="ts">
import {useTileStore} from "../store/useTileStore.ts";
import {onMounted, ref} from "vue";

const emit = defineEmits(['close'])
const store = useTileStore();

interface Tile {
  img: string;
  rotation: number;
}

const saveName = ref<string>('');
const savedSurcetsCount = ref<number>(0);
const savedSurcetsNames = ref<string[]>([]);
const selectedSaveKey = ref<string>('');

type TileMap = Record<number, Tile>;

function newSurcet() {
  emit('close')
  store.clearCanvas()
}

function updateLoadSelection(){
  savedSurcetsNames.value = []

  for (let i = 1; i <= localStorage.length; i++) {

    savedSurcetsCount.value = localStorage.length

    let name = localStorage.key(i-1);
    if (name !== null) {
      savedSurcetsNames.value.push(name)
    }
  }
}

onMounted(() => {
  updateLoadSelection();
})

function saveSurcet() {
  localStorage.setItem(`${saveName.value}`, JSON.stringify(store.placedTiles))
  savedSurcetsCount.value = localStorage.length

  savedSurcetsNames.value = []

  for (let i = 1; i <= localStorage.length; i++) {
    let name = localStorage.key(i-1);
    if (name !== null) {
      savedSurcetsNames.value.push(name)
    }
  }
  console.log(savedSurcetsNames.value[1])
}

function returnToSurcet() {
  emit('close')
}

function loadSurcet() {
  const loadedSurcet = localStorage.getItem(`${selectedSaveKey.value}`)

  if (loadedSurcet){
    store.placedTiles = JSON.parse(loadedSurcet) as TileMap;
  }
}

function exportFile (data: any, name: string) {
  const json = JSON.stringify(data);

  const blob = new Blob([json], {type: 'application/json'});

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${name}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}

function openImportDialog() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';

  input.onchange = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      processImportedSurcet(file.name, content);
    };
    reader.readAsText(file);
  };

  input.click();
}

function processImportedSurcet(fileName: string, content: string) {
    const parsedData = JSON.parse(content) as TileMap;

    store.placedTiles = parsedData;

    const cleanName = fileName.replace('.json', '');
    localStorage.setItem(cleanName, content);

    selectedSaveKey.value = cleanName;
    saveName.value = cleanName;
}

</script>

<template>
  <div id="menu-container">
    <div id="menu-content">
      <h1>Car surcet Thing</h1>
      <span>Make your dream surcet a reality</span>
      <button @click="newSurcet">New surcet</button>

      <span>Save</span>
      <input type="text" v-model="saveName">
      <button @click="saveSurcet">Save</button>
      <button @click="exportFile(store.placedTiles, saveName)">Export</button>/

      <span>Load</span>
      <select name="" id="" v-model="selectedSaveKey">
        <option :value="savedSurcetsNames[n-1]" v-for="n in savedSurcetsCount" :key="n-1" >{{savedSurcetsNames[n-1]}}</option>
      </select>
      <button @click="loadSurcet">Load</button>
      <button @click="openImportDialog">Pick File</button>

      <span>Return</span>
      <button @click="returnToSurcet"> return</button>
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
  align-items: center;
  margin-top: 2vw;
  background-color: gray;
  width: 80%;
  height: 100%;
}

#menu-content h1 {
  font-size: 5vw;
}

#menu-content span {
  font-size: 3vw;
}

#menu-content button {
  width: 800px;
  height: 200px;
  font-size: 80px;
}

#menu-content input {
  width: 800px;
  height: 200px;
  font-size: 80px;
}

#menu-content select {
  width: 800px;
  height: 200px;
  font-size: 80px;
}

</style>