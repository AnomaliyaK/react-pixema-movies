import { MovieItem } from "components";
import { Movie } from "types";
import { StyledMovieList } from "./styles";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />;
      })}
    </StyledMovieList>
  );
};
