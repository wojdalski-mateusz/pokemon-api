import ResponsiveAppBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";
import { Arena } from "./components/Arena";
import { LogPage } from "./components/LogPage";
import { Registry } from "./components/Registry";
import { Pokemon } from "./components/Home/Pokemon";
import { useEffect, useState } from "react";
import { FavoriteProvider } from "./contexts/favoritesContext";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [favorites, setFavorites] = useState([]);

  const getArray = JSON.parse(localStorage.getItem("FAVORITES") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  const updateFavoritePokemons = (pokemon) => {
    let addToArray = true;
    favorites.map((item, key) => {
      if (item === pokemon) {
        favorites.splice(key, 1);
        addToArray = false;
      }
    });
    if (addToArray) {
      favorites.push(pokemon);
    }
    setFavorites([...favorites]);
    localStorage.setItem("FAVORITES", JSON.stringify(favorites));

    const storage = localStorage.getItem("FAV_POKE" + pokemon || "0");
    if (storage === null) {
      localStorage.setItem("FAV_POKE" + pokemon, JSON.stringify(pokemon));
    } else {
      localStorage.removeItem("FAV_POKE" + pokemon);
    }
  };

  return (
    <div>
      <ResponsiveAppBar />
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="pokemon/:pokemonId"
            element={<Pokemon BASE_URL={BASE_URL} />}
          />
          <Route path="Ulubione" element={<Favorites />} />
          <Route path="Arena" element={<Arena />} />
          <Route path="Logowanie" element={<LogPage />} />
          <Route path="Rejestracja" element={<Registry />} />
        </Routes>
      </FavoriteProvider>
    </div>
  );
}

export default App;
