import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { Movie } from 'types';
import { ROUTE } from '../../router/routes';
import { MovieItem } from '../MovieItem/MovieItem';
import { ListMovie } from './styles';

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
