import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { getFavoritesMovies, getUserAuth, useAppSelector } from "store";
import { MovieList } from "components";
import { NotFavoriteMovies, StyledFavoritesPage, WrapNotFavoriteMovies } from "./styles";
import { PosterNotFound } from "assets";

export const FavoritesPage = () => {
  const { isAuth } = useAppSelector(getUserAuth);
  const { favorites } = useAppSelector(getFavoritesMovies);
  return isAuth ? (
    <StyledFavoritesPage>
      {favorites?.length > 0 ? (
        // <FavoriteMoviesList />
        <MovieList movies={favorites} isFavorites />
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
