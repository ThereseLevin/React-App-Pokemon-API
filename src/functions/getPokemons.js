export const getPokemons = (
  url,
  setpokemons,
  setNextPageUrl,
  setPrevPageUrl
) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let pokeList = data.results;

      pokeList.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((x) => {
            item.extra = x;
          });
      });
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setpokemons(pokeList);
    });
};
