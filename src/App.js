import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import PokemonPage from "./components/PokemonPage";
import "./style/style.min.css";

function App() {
  const [pokemons, setpokemons] = useState([]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pokemons"
          element={<Pokemons pokemons={pokemons} setpokemons={setpokemons} />}
        />
        <Route
          path="/pokemons/:name"
          element={<PokemonPage pokemons={pokemons} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
