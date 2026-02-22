import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTileStore = defineStore('tileSelection', () => {
    const storedTileIMG = ref<string | null>(null)
    const storedTileName = ref<string | null>(null)

    function setTile(tileIMG: string, tileName: string) {
        storedTileIMG.value = tileIMG
        storedTileName.value = tileName
    }

    return {storedTileIMG, storedTileName, setTile}
})