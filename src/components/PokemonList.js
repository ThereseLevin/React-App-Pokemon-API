import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function PokemonList({
  pokemons,
  prevPageUrl,
  nextPageUrl,
  setCurrentPageUrl,
}) {
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  return (
    <div className="pokemon-list">
      {pokemons.map((p) => (
        <div key={p.name}>
          <div>
            <Link to={`/pokemons/${p.name}`}>{p.name}</Link>
          </div>
        </div>
      ))}
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
}
