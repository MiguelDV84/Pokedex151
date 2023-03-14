import { formatPokemonName } from "../utils/utils";
import { PokemonDetails } from "../types/types";

export async function fetchPokemon(name: string): Promise<PokemonDetails>{
    const url = `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`;
    const response = await fetch(url);
    
    if(!response.ok){
        throw new Error(`Error fetching ${name}`);
    }

    const result = await response.json();
    const pokemon = {
        name: result.nane,
        id: result.id,
        imgSrc: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat
    }

    return pokemon;
}