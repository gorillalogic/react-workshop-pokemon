import { useContext, useState, useEffect } from "react";

import fecthPokemon from "../../api/fetchPokemon";
import { PokemonContext } from '../../context/pokemoncontext'

function SearchBar() {
  const { setPokemon } = useContext(PokemonContext);
  const [ pokemonName, setPokemonName ] = useState('alakazam')

  const choosePokemon = async () => {
    const pokemon = await fecthPokemon(pokemonName.toLocaleLowerCase());
    setPokemon(pokemon);
  }

  useEffect(()=> {
    choosePokemon();
  }, [])

  const onChange = (event) => {
    setPokemonName(event.target.value)
  }

  const onSearch = (event) => {
    if (event.key === 'Enter') {
      choosePokemon(pokemonName);
    }
  }

  return (
    <>
      <div className="ui category search">
        <div className="ui icon input">
          <input onChange={onChange}  onKeyDown={onSearch} className="prompt" type="text" />
          <i className="search icon"></i>
        </div>
      </div>
    </>
  )
 }

 export default SearchBar;