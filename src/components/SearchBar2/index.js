import { useState } from "react";
import fecthPokemon from "../../api/fetchPokemon";

function SeachBar(){

  const [pokemonName, setPokemonName] = useState();

  const searchPokemon = async () => {
    const result = await fecthPokemon(pokemonName);
    console.log(result);
  }

  const onInputText = (event) => {
    const inputName = event.target.value;
    setPokemonName(inputName);
  };

  const onEnterPress = (event) => {
    if(event.key === 'Enter') {
      searchPokemon();
    }
  }

  return (
    <>
       <div className="ui category search">
        <div className="ui icon input">
          <input onChange={onInputText} onKeyPress={onEnterPress} className="prompt" type="text" />
          <i className="search icon"></i>
        </div>
      </div>
    </>
  )
}

export default SeachBar;