import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonList({ pokemons, setCurrentPokemon }) {
  return (
    <div className="pokemon-list">
      {pokemons.map((p) => (
        <div key={p.name}>
          <div>
            <Link to={`/pokemons/${p.name}`}>{p.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
