import React from 'react';
import { generatePath, Link } from 'react-router-dom';
// import { ROUTE } from 'router';
import { Movie } from 'types';
import { ROUTE } from '../../router/routes';
import { MovieCard, MovieTitle, Poster } from './styles';

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie: { title, poster } }: MovieItemProps) => {
  return (
    <MovieCard>
      <Link to={generatePath(ROUTE.DETAILS, { name: title })}>
        <Poster src={poster} alt="movie" />
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </MovieCard>
  );
};
