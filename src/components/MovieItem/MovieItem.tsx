import React from 'react';
import { generatePath, Link } from 'react-router-dom';
// import { ROUTE } from 'router';
import { Movie } from 'types';
import { ROUTE } from '../../router/routes';
import { MovieTitle, Poster, StyledMovieItem } from './styles';

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie: { title, poster } }: MovieItemProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.DETAILS, { title: title })}>
        <Poster src={poster} alt="movie" />
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </StyledMovieItem>
  );
};
