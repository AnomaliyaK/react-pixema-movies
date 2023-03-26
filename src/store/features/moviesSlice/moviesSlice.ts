import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMovies } from 'mappers';
import { Movie } from 'types';

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  // response:
  // totalResults:
}

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  movies: [],
  // response:
  // totalResults:
};

export const fetchAllMovies = createAsyncThunk<
  Movie[],
  { year: number },
  { rejectValue: string }
>('movies/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      // `https://restcountries.com/v3.1/currency/${params.currency}`
      `https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&s=war&type=&plot=&y=${params.year}&p=`
    );

    const transformedMovies = transformMovies(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllMovies.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies.push(...payload);
    });
    builder.addCase(fetchAllMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
