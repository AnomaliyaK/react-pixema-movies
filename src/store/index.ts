import moviesReducer from "./features/moviesSlice/moviesSlice";
import searchReducer from "./features/searchSlice/searchSlice";
import userReducer from "./features/userSlice/userSlice";
import movieDetailsReducer from "./features/movieDetailsSlice/movieDetailsSlice";
import trendsReducer, { fetchNextPageTrendsMovies, nextTrendsMoviePage } from "./features/trendsSlice/trendsSlice";
import favoritesReducer from "./features/favoritesSlice/favoritesSlice";
import themeReducer from "./features/themeSlice/themeSlice";
import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchAllMovies } from "./features/moviesSlice/moviesSlice";
import { fetchNextPageMovies, nextMoviePage } from "store/features/moviesSlice/moviesSlice";
import { fetchMovieDetails } from "./features/movieDetailsSlice/movieDetailsSlice";
import { fetchMoviesBySearch } from "./features/searchSlice/searchSlice";
import { fetchTrendsMovies } from "./features/trendsSlice/trendsSlice";
import { addFavorites, deleteFavorites } from "./features/favoritesSlice/favoritesSlice";

import {
  fetchSignUpUser,
  fetchSignInUser,
  fetchResetPassword,
  fetchUpdateEmail,
  fetchUpdatePassword,
  fetchSignOut,
} from "./features/userSlice/userSlice";

import type { RootState, AppDispatch } from "./store";
import { getUserAuth } from "./selectors/userAuthSelector";
import { getMovies } from "./selectors/moviesSelector";
import { getMoviesBySearch } from "./selectors/searchSelector";
import { getTrendsMovies } from "./selectors/trendsMoviesSelector";
import { getFavoritesMovies } from "./selectors/favoritesMoviesSelector";
import { getMovieDetails } from "store/selectors/movieDetailsSelector";
import { getTheme } from "store/selectors/themeSelector";
import {
  deleteMoviesParameters,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
} from "./features/searchSlice/searchSlice";
import { toggleMode } from "./features/themeSlice/themeSlice";
import { updateUserName, setAuth, unsetAuth } from "./features/userSlice/userSlice";

export {
  useAppDispatch,
  useAppSelector,
  fetchAllMovies,
  fetchNextPageMovies,
  nextMoviePage,
  fetchMovieDetails,
  fetchMoviesBySearch,
  fetchTrendsMovies,
  fetchSignUpUser,
  fetchSignInUser,
  fetchResetPassword,
  fetchNextPageTrendsMovies,
  nextTrendsMoviePage,
  fetchUpdateEmail,
  fetchUpdatePassword,
  fetchSignOut,
  moviesReducer,
  searchReducer,
  userReducer,
  movieDetailsReducer,
  trendsReducer,
  favoritesReducer,
  themeReducer,
  store,
  RootState,
  AppDispatch,
  getUserAuth,
  getMovies,
  getMoviesBySearch,
  getTrendsMovies,
  getFavoritesMovies,
  getMovieDetails,
  getTheme,
  deleteMoviesParameters,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
  addFavorites,
  deleteFavorites,
  toggleMode,
  updateUserName,
  setAuth,
  unsetAuth,
};
