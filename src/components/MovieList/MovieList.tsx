import { MovieItem } from "components";
import { Movie } from "types";
import { StyledMovieList } from "./styles";

interface MovieListProps {
  movies: Movie[];
  // isFavorites?: boolean;
  isTrends?: boolean;
}

export const MovieList = ({ movies, isTrends }: MovieListProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieItem trends={isTrends} movie={movie} key={movie.id} />;
      })}
    </StyledMovieList>
  );
};
