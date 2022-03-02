import { PokemonProvider } from "./context/pokemoncontext";
import SearchBar from "./components/SearchBar";
//import SearchBar from "./components/SearchBar2";
import PokemonCard from "./components/PokemonCard";
import './App.css';
function App() {
 return (
   <PokemonProvider>
     <div className="ui container center aligned custom-container">
        <div className="ui segment">Welcome to the pokedex
            <div className="ui divider"></div>
            <SearchBar />
            <div className="ui divider"></div>
            <PokemonCard />
        </div>
     </div>
   </PokemonProvider>
 )
}

export default App;