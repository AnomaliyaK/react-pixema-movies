import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { getFavoritesMovies, getUserAuth, useAppSelector } from "store";
import { FavoriteMoviesList } from "components";
import { NotFavoriteMovies, StyledFavoritesPage, WrapNotFavoriteMovies } from "./styles";
import { PosterNotFound } from "assets";

export const FavoritesPage = () => {
  const { isAuth } = useAppSelector(getUserAuth);
  const { favorites } = useAppSelector(getFavoritesMovies);
  return isAuth ? (
    <StyledFavoritesPage>
      {favorites?.length > 0 ? (
        <FavoriteMoviesList />
      ) : (
        <WrapNotFavoriteMovies>
          <NotFavoriteMovies src={PosterNotFound} />
          <p>You don't have favorite movies</p>
        </WrapNotFavoriteMovies>
      )}
    </StyledFavoritesPage>
  ) : (
    <Navigate to={ROUTE.SIGN_IN} />
  );
};

// import React, { useEffect, useState } from "react";
// import { MovieList } from "components";

// export const FavoritesPage = () => {
//   const [movies, setMovies] = useState<any[]>([]);
//   useEffect(() => {
//     fetch("https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&type=&y=&p=&s=love")
//       .then((res) => res.json())
//       .then(setMovies);
//   }, []);

//   return (
//     <div>
//       <h1>FavoritesPage</h1>
//       <MovieList movies={movies} />
//     </div>
//   );
// };
