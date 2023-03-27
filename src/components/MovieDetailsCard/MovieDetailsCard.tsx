import React from 'react';
import { MovieDetails } from 'types';
import { COLOR } from 'ui';
import {
  Badges,
  DescriptionMovie,
  GenreMovie,
  MainInfoMovie,
  PosterDetails,
  PosterWithButton,
  StyledMovieDetailsCard,
  TitleMovie,
} from './styles';

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
      <PosterWithButton>
        <PosterDetails src={poster} alt={title} />
        <button>favorite</button>
        <button>share</button>
      </PosterWithButton>
      <DescriptionMovie>
        <MainInfoMovie>
          <GenreMovie>{genre}</GenreMovie>
          <TitleMovie>{title}</TitleMovie>
          <Badges>
            <span>{imdbRating}</span>
            <span>IMDb {imdbRating}</span>
            <span>{runtime}</span>
          </Badges>
        </MainInfoMovie>

        <p>{plot}</p>
        <span>Year {year}</span>
        <span>Released {released}</span>
        <span>BoxOffice {boxOffice}</span>
        <span>Country {country}</span>
        <span>Prodaction {production}</span>
        <span> Actors {actors}</span>
        <span>Director {director}</span>
        <span>Writers {writers}</span>
      </DescriptionMovie>
    </StyledMovieDetailsCard>
  );
};
