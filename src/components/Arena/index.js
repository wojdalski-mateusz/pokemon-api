import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import * as S from "../Home/Pokemons/styles";

export const Arena = () => {
  return (
    <Container>
      <S.Container>
        <h1>To jest ARENA do walki Pokemonów</h1>
        <Link to="/">Strona główna</Link>
      </S.Container>
    </Container>
  );
};
