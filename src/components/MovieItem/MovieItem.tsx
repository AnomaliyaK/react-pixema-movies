import { generatePath, Link } from "react-router-dom";
import { Movie } from "types";
import { ROUTE } from "router";
import { MovieTitle, Poster, StyledMovieItem, TrendsLabel, WrapMovieItem, WrapPoster } from "./styles";
import { PosterNotFound, TrendsIcon } from "assets";

interface MovieItemProps {
  movie: Movie;
  trends?: boolean;
}

export const MovieItem = ({ movie: { title, poster }, trends }: MovieItemProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.DETAILS, { title: title })}>
        {trends && (
          <TrendsLabel>
            <TrendsIcon />
          </TrendsLabel>
        )}
        <WrapMovieItem>
          <WrapPoster>
            {poster === "N/A" ? <Poster src={PosterNotFound} alt="Movie" /> : <Poster src={poster} alt={title} />}
          </WrapPoster>
          <MovieTitle>{title}</MovieTitle>
        </WrapMovieItem>
      </Link>
    </StyledMovieItem>
  );
};
