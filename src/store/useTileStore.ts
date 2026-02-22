import { defineStore } from 'pinia'
import { ref} from 'vue'

interface Tile {
    img: string;
    rotation: number;
}

export const useTileStore = defineStore('tileSelection', () => {
    const storedTileIMG = ref<string | null>(null)
    const storedTileName = ref<string | null>(null)
    const placedTiles = ref<Record<number, Tile>>({});

    function setTile(tileIMG: string, tileName: string) {
        storedTileIMG.value = tileIMG
        storedTileName.value = tileName
    }

    function clearCanvas() {
        placedTiles.value = {};
    }



    return {storedTileIMG, storedTileName, setTile, clearCanvas, placedTiles}
})