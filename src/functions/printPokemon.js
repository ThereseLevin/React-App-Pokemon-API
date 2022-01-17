const printArray = (filteredPoke, type, name, x) => {
  //   let arr = [];
  //   if (typeof filteredPoke.extra[type] == "Object") {
  //     arr = Object.keys(filteredPoke.extra[type]);
  //   } else {
  //     arr = filteredPoke.extra[type];
  //   }

  return filteredPoke.map((item, i) => {
    return <li key={`${x}-${i}`}>item:{item[type][name]}</li>;
  });
};

export const printPokemon = (currentPokemon, pokemons) => {
  return pokemons
    .filter((poke) => poke.name == currentPokemon)
    .map((filteredPoke, i) => {
      return (
        <ul>
          <li key={`${filteredPoke.name}-${i}`}>Name: {filteredPoke.name}</li>
          <li key={`${filteredPoke.extra.id}-${i}`}>
            ID: {filteredPoke.extra.id}
          </li>
          {printArray(filteredPoke.extra.moves, "move", "name", i)}
          {printArray(filteredPoke.extra.abilities, "ability", "name", i)}
          {/* {printArray(filteredPoke.extra.moves.move.name, "species", "name")} */}
        </ul>
      );
    });
};
