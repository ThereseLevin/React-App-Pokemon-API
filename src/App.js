import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import PokemonPage from "./components/PokemonPage";
import "./style/style.min.css";

// Functions
import { getPokemons } from "./functions/getPokemons";

function App() {
  const [pokemons, setpokemons] = useState([]);

  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const [currentPokemon, setCurrentPokemon] = useState("");

  useEffect(() => {
    getPokemons(currentPageUrl, setpokemons, setNextPageUrl, setPrevPageUrl);
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route
          path="/pokemons/:name"
          element={<PokemonPage pokemons={pokemons} />}
        ></Route>
      </Routes>

      {currentPokemon == "" && (
        <>
          <PokemonList
            pokemons={pokemons}
            setCurrentPokemon={setCurrentPokemon}
          />
          <Pagination
            goToNextPage={nextPageUrl ? goToNextPage : null}
            goToPrevPage={prevPageUrl ? goToPrevPage : null}
          />
        </>
      )}

      {currentPokemon && (
        <>
          <PokemonPage currentPokemon={currentPokemon} pokemons={pokemons} />
          <button onClick={() => setCurrentPokemon("")}>Back</button>
        </>
      )}
    </>
  );
}

export default App;
