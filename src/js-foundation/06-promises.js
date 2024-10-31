import { httpClientPlugin } from "../plugins/http-client.plugin.js";


export const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClientPlugin.get(url);
  
  console.log( pokemon.name) 
};


