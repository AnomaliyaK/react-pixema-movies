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
      <p>{plot}</p>
      <span>Year {year}</span>
      <span>Released {released}</span>
      <span>BoxOffice {boxOffice}</span>
      <span>Country {country}</span>
      <span>Prodaction {production}</span>
      <span> Actors {actors}</span>
      <span>Director {director}</span>
      <span>Writers {writers}</span>
    </StyledMovieDetailsCard>
  );
};
