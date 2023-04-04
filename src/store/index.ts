import moviesReducer from "./features/moviesSlice/moviesSlice";
import searchReducer from "./features/searchSlice/searchSlice";
import userReducer from "./features/userSlice/userSlice";
import movieDetailsReducer from "./features/movieDetailsSlice/movieDetailsSlice";
import trendsReducer from "./features/trendsSlice/trendsSlice";
import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchAllMovies } from "./features/moviesSlice/moviesSlice";
import { fetchNextPageMovies, nextMoviePage } from "store/features/moviesSlice/moviesSlice";
import { fetchMovieDetails } from "./features/movieDetailsSlice/movieDetailsSlice";
import { fetchMoviesBySearch } from "./features/searchSlice/searchSlice";
import { fetchTrendsMovies } from "./features/trendsSlice/trendsSlice";
import { fetchSignUpUser } from "./features/userSlice/userSlice";
import { fetchNextPageTrendsMovies, nextTrendsMoviePage } from "./features/trendsSlice/trendsSlice";
import type { RootState, AppDispatch } from "./store";
import { getUserAuth } from "./selectors/userAuthSelector";
import { getMovies } from "./selectors/moviesSelector";
import { getMoviesBySearch } from "./selectors/searchSelector";
import { getTrendsMovies } from "./selectors/trendsMoviesSelector";
import {
  deleteMoviesParameters,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
} from "./features/searchSlice/searchSlice";

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
  fetchNextPageTrendsMovies,
  nextTrendsMoviePage,
  moviesReducer,
  searchReducer,
  userReducer,
  movieDetailsReducer,
  trendsReducer,
  store,
  RootState,
  AppDispatch,
  getUserAuth,
  getMovies,
  getMoviesBySearch,
  getTrendsMovies,
  deleteMoviesParameters,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
};
