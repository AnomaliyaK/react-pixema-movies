import React from "react";
import { generatePath, Link } from "react-router-dom";
import { Movie } from "types";

import { ROUTE } from "router";
import { MovieTitle, Poster, StyledMovieItem, WrapMovieItem, WrapPoster } from "./styles";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie: { title, poster } }: MovieItemProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.DETAILS, { title: title })}>
        <WrapMovieItem>
          <WrapPoster>
            <Poster src={poster} alt="movie" />
          </WrapPoster>
          <MovieTitle>{title}</MovieTitle>
        </WrapMovieItem>
      </Link>
    </StyledMovieItem>
  );
};
