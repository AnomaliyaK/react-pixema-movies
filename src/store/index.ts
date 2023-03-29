import { store } from "./store";
import moviesReducer from "./features/moviesSlice/moviesSlice";
import searchReducer from "./features/searchSlice/searchSlice";
import userReducer from "./features/userSlice/userSlice";
import movieDetailsReducer from "./features/movieDetailsSlice/movieDetailsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchAllMovies } from "./features/moviesSlice/moviesSlice";
import { fetchMovieDetails } from "./features/movieDetailsSlice/movieDetailsSlice";
import { fetchAllSearch } from "./features/searchSlice/searchSlice";
import { fetchTrendsMovies } from "./features/trendsSlice/trendsSlice";
import { fetchSignUpUser } from "./features/userSlice/userSlice";
import type { RootState, AppDispatch } from "./store";

export {
  useAppDispatch,
  useAppSelector,
  fetchAllMovies,
  fetchMovieDetails,
  fetchAllSearch,
  fetchTrendsMovies,
  fetchSignUpUser,
  moviesReducer,
  searchReducer,
  userReducer,
  movieDetailsReducer,
  store,
  RootState,
  AppDispatch,
};
