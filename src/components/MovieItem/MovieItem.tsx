import { generatePath, Link } from "react-router-dom";
import { Movie } from "types";
import { ROUTE } from "router";
import { FavoriteLabel, MovieTitle, Poster, StyledMovieItem, TrendLabel, WrapMovieItem, WrapPoster } from "./styles";
import { FavoritesIcon, PosterNotFound, TrendsIcon } from "assets";

interface MovieItemProps {
  movie: Movie;
  isTrend?: boolean;
  isFavorite?: boolean;
}

export const MovieItem = ({ movie: { title, poster, id }, isTrend, isFavorite }: MovieItemProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.DETAILS, { title: title })}>
        {isTrend && (
          <TrendLabel>
            <TrendsIcon />
          </TrendLabel>
        )}
        {isFavorite && (
          <FavoriteLabel>
            <FavoritesIcon />
          </FavoriteLabel>
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
