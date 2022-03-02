import { useContext } from "react";
import { PokemonContext } from "../../context/pokemoncontext";
import List from "../commun/List";

function PokemonCard() {
  const { pokemon } = useContext(PokemonContext);

  const getPokemonAbilities = () => {
    return pokemon.abilities.map(obj => obj.ability.name);
  }

  if(!pokemon) {
    return (
      <p>Please search for a pokemon!!!</p>
    )
  }
  const pokemonImage = pokemon.sprites.front_shiny;
  const pokeAbilities = getPokemonAbilities();
  return (
    <>
      <div className="ui centered card">
        <div className="image">
          <img alt="pokemon img" src={pokemonImage} />
        </div>
        <div className="content">
          <label className="header">{pokemon.name}</label>
          <List listItems={pokeAbilities} />
        </div>
      </div>
    </>
  )
 }

 export default PokemonCard;