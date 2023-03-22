import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMovies } from 'mappers';
import { Movie } from 'types';

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  movies: [],
};

export const fetchTrendsMovies = createAsyncThunk<
  Movie[],
  { year: number },
  { rejectValue: string }
>('movies/fetchTrends', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&s=love&type=&plot=&y=${params.year}&p=`
    );

    const transformedMovies = transformMovies(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

const trendsSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrendsMovies.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrendsMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies.push(...payload);
    });
    builder.addCase(fetchTrendsMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trendsSlice.reducer;
