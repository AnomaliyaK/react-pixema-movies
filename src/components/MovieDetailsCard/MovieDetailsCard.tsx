import { FavoritesIcon, IMDbIcon, ShareIcon } from "assets";
import { MovieDetailsItem } from "components/MovieDetailsItem/MovieDetailsItem";
import React from "react";
import { MovieDetails } from "types";

import {
  Badges,
  DescriptionMovie,
  FavoriteButton,
  FullDescription,
  GenreMovie,
  GroupButton,
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
} from "./styles";

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
        <GroupButton>
          <FavoriteButton>
            <FavoritesIcon />
          </FavoriteButton>
          <ShareButton>
            <ShareIcon />
          </ShareButton>
        </GroupButton>
      </PosterWithButton>
      <DescriptionMovie>
        <MainInfoMovie>
          <GenreMovie>{genre}</GenreMovie>
          <TitleMovie>{title}</TitleMovie>
          <Badges>
            <Rating>{imdbRating}</Rating>
            <IMDb>
              <IMDbIcon /> {imdbRating}
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
