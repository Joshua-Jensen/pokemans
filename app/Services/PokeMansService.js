import { appState } from "../AppState.js";
import { Pokeman } from "../Models/Pokeman.js";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 5000
})


class PokeMansService {
    async getAllPokemon() {
        const res = await pokeApi.get('?limit=151')
        appState.pokemansList = res.data.results

    }

    async setPokeMan(id) {
        let pokeman = appState.pokemans.find(p => p.name == id)
        const res = await pokeApi.get(`/${id}`)
        console.log(res.data.results);
    }
}

export const pokeMansService = new PokeMansService()