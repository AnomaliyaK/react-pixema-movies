import { MovieItem } from "components";
import { Movie } from "types";
import { ListMovie } from "./styles";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ListMovie>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />;
      })}
    </ListMovie>
  );
};
