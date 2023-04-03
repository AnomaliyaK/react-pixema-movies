import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovies } from "mappers";
import { Movie } from "types";

interface TrendsState {
  movies: Movie[];
  page: number;
  year: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: TrendsState = {
  movies: [],
  page: 1,
  year: 2022,
  isLoading: false,
  error: null,
};

export const fetchTrendsMovies = createAsyncThunk<Movie[], { year: number }, { rejectValue: string }>(
  "trends/fetchTrendsMovies",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=war&type=&plot=&page=&apikey=c28df97b&y=${params.year}`,
      );

      const transformedMovies = transformMovies(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;

      return rejectWithValue(message);
    }
  },
);

export const fetchNextPageTrendsMovies = createAsyncThunk<Movie[], { page: number }, { rejectValue: string }>(
  "trends/fetchNextPageTrendsMovies",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=war&type=&plot=&page=${params.page + 1}&apikey=c28df97b&y=2022`,
      );

      const transformedMovies = transformMovies(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {
    nextTrendsMoviePage(state, { payload }) {
      payload ? (state.page = state.page + 1) : (state.page = 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTrendsMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrendsMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(fetchTrendsMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextPageTrendsMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNextPageTrendsMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = [...state.movies, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextPageTrendsMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});
export const { nextTrendsMoviePage } = trendsSlice.actions;

export default trendsSlice.reducer;
