import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovies } from "mappers";
import { Movie, SearchValue } from "types";

interface SearchState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  searchValue: SearchValue;
}

const initialState: SearchState = {
  movies: [],
  isLoading: false,
  error: null,
  searchValue: { s: "", y: "", type: "", page: 1 },
};

export const fetchMoviesBySearch = createAsyncThunk<Movie[], SearchValue, { rejectValue: string }>(
  "search/fetchMoviesBySearch",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${params.s}&type=${params.type}&plot=&y=${params.y}&apikey=c28df97b&page=${params.page}`,
      );
      const transformedMovies = transformMovies(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;

      return rejectWithValue(message);
    }
  },
);

export const fetchNextPageMoviesBySearch = createAsyncThunk<Movie[], SearchValue, { rejectValue: string }>(
  "search/fetchNextPageMoviesBySearch",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${params.s}&type=${params.type}&plot=&y=${params.y}&apikey=c28df97b&page=${
          params.page + 1
        }`,
      );
      const transformedMovies = transformMovies(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    nextPageMoviesBySearch(state, { payload }) {
      payload ? (state.searchValue.page = state.searchValue.page + 1) : (state.searchValue.page = 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMoviesBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(fetchMoviesBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextPageMoviesBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNextPageMoviesBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = [...state.movies, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextPageMoviesBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});
export const { nextPageMoviesBySearch } = searchSlice.actions;

export default searchSlice.reducer;
