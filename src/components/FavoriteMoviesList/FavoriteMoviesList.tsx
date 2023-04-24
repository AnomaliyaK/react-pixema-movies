import { MovieItem } from "components";
import { getFavoritesMovies, useAppSelector } from "store";

export const FavoriteMoviesList = () => {
  const { favorites } = useAppSelector(getFavoritesMovies);
  return (
    <div>
      {favorites.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} isFavorite={true} />;
      })}
    </div>
  );
};
