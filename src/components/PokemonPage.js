import React from "react";
import { useParams } from "react-router-dom";
import { printPokemon } from "../functions/printPokemon";

function PokemonPage({ pokemons }) {
  let params = useParams();
  return (
    <div>
      <h1>{params.name}s Page</h1>
      {printPokemon(params.name, pokemons)}
    </div>
  );
}

export default PokemonPage;
