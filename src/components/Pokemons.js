import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
// Functions
import { getPokemons } from "../functions/getPokemons";

function Pokemons({ pokemons, setpokemons }) {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    getPokemons(currentPageUrl, setpokemons, setNextPageUrl, setPrevPageUrl);
  }, [currentPageUrl]);
  return (
    <>
      <h1>POKEMONS</h1>
      <PokemonList
        pokemons={pokemons}
        prevPageUrl={prevPageUrl}
        nextPageUrl={nextPageUrl}
        setCurrentPageUrl={setCurrentPageUrl}
      />
    </>
  );
}

export default Pokemons;
