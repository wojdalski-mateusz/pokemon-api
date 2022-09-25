import React from "react";

export const favoriteContext = React.createContext({
  favoritePokemons: [],
  updateFavoritePokemons: (id) => null,
});

export const FavoriteProvider = favoriteContext.Provider;
