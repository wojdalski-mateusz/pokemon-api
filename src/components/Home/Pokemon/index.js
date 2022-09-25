import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/material/";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { favoriteContext } from "../../../contexts/favoritesContext";
import * as S from "../../Home/Pokemons/styles";


export const Pokemon = ({ BASE_URL }) => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(true);
  const URL = `${BASE_URL}${pokemonId}`;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(favoriteContext);

  useEffect(() => {
    const fetchPoke = async () => {
      setLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      setPokemonData(data);
      setLoading(false);
    };
    fetchPoke();
  }, [URL]);

  if (loading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );

  const btn = favoritePokemons.includes(pokemonData) ? "Usuń" : "Dodaj";

  const onFavoriteClick = () => {
    updateFavoritePokemons(pokemonData);
  };

  console.log("Ulubione", favoritePokemons);

  return (
    <Container>
      <S.Container>
        <h1>POKEDEX</h1>
        <h2>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
          />
          {pokemonData.name.toUpperCase()}
          <button onClick={onFavoriteClick}>
            {/* <FavoriteBorderIcon color="primary" fontSize="large" /> */}
            {btn}
          </button>
        </h2>
        <p>Ability: {pokemonData.abilities[0].ability.name}</p>
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Base experience: {pokemonData.base_experience}</p>
        <Link to="/">Strona główna</Link>
      </S.Container>
    </Container>
  );
};
