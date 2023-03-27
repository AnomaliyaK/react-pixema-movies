import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';
import React from 'react';
import { MovieDetails } from 'types';

import {
  Badges,
  DescriptionMovie,
  FavoriteButton,
  FullDescription,
  GenreMovie,
  IMDb,
  MainInfoMovie,
  Plot,
  PosterDetails,
  PosterWithButton,
  Rating,
  Runtime,
  ShareButton,
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
        <FavoriteButton>favorite</FavoriteButton>
        <ShareButton>share</ShareButton>
      </PosterWithButton>
      <DescriptionMovie>
        <MainInfoMovie>
          <GenreMovie>{genre}</GenreMovie>
          <TitleMovie>{title}</TitleMovie>
          <Badges>
            <Rating>{imdbRating}</Rating>
            <IMDb>
              <img src="../../assets/icons/IMDb.png" alt="IMDb" /> {imdbRating}
            </IMDb>
            <Runtime>{runtime}</Runtime>
          </Badges>
        </MainInfoMovie>
        <Plot>{plot}</Plot>
        <FullDescription>
          <MovieDetailsItem label="Year" value={year} />
          <MovieDetailsItem label="Released" value={released} />
          <MovieDetailsItem label="BoxOffice" value={boxOffice} />
          <MovieDetailsItem label="Country" value={country} />
          <MovieDetailsItem label="Prodaction" value={production} />
          <MovieDetailsItem label="Actors" value={actors} />
          <MovieDetailsItem label="Director" value={director} />
          <MovieDetailsItem label="Writers" value={writers} />
        </FullDescription>
      </DescriptionMovie>
    </StyledMovieDetailsCard>
  );
};
