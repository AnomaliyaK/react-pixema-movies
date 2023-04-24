import { generatePath, Link } from "react-router-dom";
import { Movie } from "types";
import { ROUTE } from "router";
import { FavoriteLabel, MovieTitle, Poster, StyledMovieItem, TrendLabel, WrapMovieItem, WrapPoster } from "./styles";
import { FavoritesIcon, PosterNotFound, TrendsIcon } from "assets";

interface MovieItemProps {
  movie: Movie;
  isTrends?: boolean;
  isFavorites?: boolean;
}

export const MovieItem = ({ movie: { title, poster, id }, isTrends, isFavorites }: MovieItemProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.HOME + ROUTE.DETAILS, { title: title })}>
        {isTrends && (
          <TrendLabel>
            <TrendsIcon />
          </TrendLabel>
        )}
        {isFavorites && (
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
