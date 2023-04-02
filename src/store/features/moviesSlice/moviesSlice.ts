import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovies } from "mappers";
import { Movie } from "types";

interface MoviesState {
  movies: Movie[];
  page: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  page: 1,
  isLoading: false,
  error: null,
};

export const fetchAllMovies = createAsyncThunk<Movie[], { page: number }, { rejectValue: string }>(
  "movies/fetchAllMovies",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=world&type=&plot=&y=&apikey=c28df97b&page=${params.page}`,
      );
      const transformedMovies = transformMovies(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

export const fetchNextPageMovies = createAsyncThunk<Movie[], { page: number }, { rejectValue: string }>(
  "movies/fetchNextPageMovies",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=world&type=&plot=&y=&apikey=c28df97b&page=${params.page + 1}`,
      );

      const transformedMovies = transformMovies(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    nextMoviePage(state, { payload }) {
      payload ? (state.page = state.page + 1) : (state.page = 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(fetchAllMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextPageMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNextPageMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = [...state.movies, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextPageMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});
export const { nextMoviePage } = moviesSlice.actions;

export default moviesSlice.reducer;
