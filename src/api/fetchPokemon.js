const fecthPokemon = async (pokemonName) => {
  const name = pokemonName !== '' ? pokemonName : 'pikachu';
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();
  return data;
};

export default fecthPokemon;