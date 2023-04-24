import { FavoritesIcon, IMDbIcon, ShareIcon } from "assets";
import { MovieDetailsItem, Slider } from "components";
import { Movie, MovieDetails } from "types";
import {
  Badges,
  DescriptionMovie,
  FavoriteButton,
  FullDescription,
  GenreMovie,
  GroupButton,
  GroupSlider,
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
  TittleSlider,
} from "./styles";
import { addFavorites, deleteFavorites, getMovieDetails, getUserAuth, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { useToggle } from "hooks";
import { useState } from "react";
import { ROUTE } from "router";
import { COLOR } from "ui";

interface MovieDetailsCardProps {
  movieDetails: MovieDetails;
  movies: Movie[];
}

export const MovieDetailsCard = ({
  movies,
  movieDetails: {
    title,
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
  const { isAuth } = useAppSelector(getUserAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { movieDetails, isLoading } = useAppSelector(getMovieDetails);
  const [buttonColor, setButtonColor] = useState(COLOR.LIGHT);
  const [isOpen, setToggle] = useToggle(false);

  const handleAddFavorite = (): void => {
    isAuth ? dispatch(addFavorites(movieDetails)) : navigate(ROUTE.SIGN_IN);
    setButtonColor(COLOR.PRIMARY);
    setToggle();
  };

  const handleDeleteFavorite = (): void => {
    dispatch(deleteFavorites(movieDetails.id));
  };

  return (
    <StyledMovieDetailsCard>
      <PosterWithButton>
        <PosterDetails src={poster} alt={title} />
        <GroupButton>
          <FavoriteButton type="button" onClick={handleAddFavorite} style={{ fill: buttonColor }}>
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
      <GroupSlider>
        <TittleSlider>Recommendations</TittleSlider>
        <Slider />
      </GroupSlider>
    </StyledMovieDetailsCard>
  );
};
