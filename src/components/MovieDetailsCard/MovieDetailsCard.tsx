import { FavoritesIcon, IMDbIcon, ShareIcon } from "assets";
import { Loader, MovieDetailsItem, SliderRecomendation } from "components";
import { Movie, MovieDetails } from "types";
import {
  AddFavoriteButton,
  Badges,
  DeleteFavoriteButton,
  DescriptionMovie,
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
} from "./styles";
import {
  addFavorites,
  deleteFavorites,
  getFavoritesMovies,
  getMovieDetails,
  getUserAuth,
  useAppDispatch,
  useAppSelector,
} from "store";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTE } from "router";

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
  const { favorites } = useAppSelector(getFavoritesMovies);

  const handleAddFavorite = (): void => {
    isAuth ? dispatch(addFavorites(movieDetails)) : navigate(ROUTE.HOME + ROUTE.SIGN_IN);
  };

  const handleDeleteFavorite = (): void => {
    dispatch(deleteFavorites(movieDetails.id));
  };

  const isFavorite = (): boolean => favorites.some((favorite) => favorite.id === movieDetails.id);

  return (
    <StyledMovieDetailsCard>
      {isLoading && <Loader />}
      <PosterWithButton>
        <PosterDetails src={poster} alt={title} />
        <GroupButton>
          {isFavorite() ? (
            <DeleteFavoriteButton type="button" onClick={handleDeleteFavorite}>
              <FavoritesIcon />
            </DeleteFavoriteButton>
          ) : (
            <AddFavoriteButton type="button" onClick={handleAddFavorite}>
              <FavoritesIcon />
            </AddFavoriteButton>
          )}
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
        <SliderRecomendation movies={movies} />
      </GroupSlider>
    </StyledMovieDetailsCard>
  );
};
