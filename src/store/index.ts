import { store } from "./store";
import moviesReducer from "./features/moviesSlice/moviesSlice";
import searchReducer from "./features/searchSlice/searchSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchAllMovies } from "./features/moviesSlice/moviesSlice";
import { fetchMovieDetails } from "./features/movieDetailsSlice/movieDetailsSlice";
import { fetchAllSearch } from "./features/searchSlice/searchSlice";
import { fetchTrendsMovies } from "./features/trendsSlice/trendsSlice";

export {
  store,
  fetchAllMovies,
  fetchMovieDetails,
  fetchAllSearch,
  fetchTrendsMovies,
  moviesReducer,
  searchReducer,
  useAppDispatch,
  useAppSelector,
};
