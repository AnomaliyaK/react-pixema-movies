import React from 'react';
import { MovieDetails } from 'types';
import { PosterDetails, StyledMovieDetailsCard } from './styles';

interface MovieDetailsCardProps {
  movieDetails: MovieDetails;
}

export const MovieDetailsCard = ({
  movieDetails: {
    title,
    id,
    genre,
    runtime,
    imdbRating,
    poster,
    year,
    released,
    boxOffice,
    country,
    production,
    actors,
    plot,
    director,
    writers,
  },
}: MovieDetailsCardProps) => {
  return (
    <StyledMovieDetailsCard>
      <PosterDetails src={poster} alt="movie" />
      <span>{genre}</span>
      <span>{title}</span>
      <span>{runtime}</span>
      <span>{imdbRating}</span>
      <span>{year}</span>
      <span>{released}</span>
      <span>{boxOffice}</span>
      <span>{country}</span>
      <span>{production}</span>
      <span>{actors}</span>
      <span>{director}</span>
      <span>{writers}</span>
      <p>{plot}</p>
    </StyledMovieDetailsCard>
  );
};
