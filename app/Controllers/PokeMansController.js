import { appState } from "../AppState.js";
import { Pokeman } from "../Models/Pokeman.js";
import { pokeMansService } from "../Services/PokeMansService.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPokemanList() {
    let pokemans = appState.pokemansList
    let template = ''
    pokemans.forEach(p => {
        template += Pokeman.PokemanList(p)
    });
    setHTML('pokemanList', template)
}


export class PokeMansController {
    constructor() {
        console.log('hello');
        this.getAllPokemon()
        appState.on('pokemansList', _drawPokemanList)
    }

    async getAllPokemon() {
        try {
            await pokeMansService.getAllPokemon()
        } catch (error) {
            console.log(error);
        }
    }

    async setPokeMan(id) {
        try {
            await pokeMansService.setPokeMan(id)

        } catch (error) {
            console.log(error)
        }
    }
}