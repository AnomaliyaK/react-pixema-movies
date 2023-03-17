import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMovies } from 'mappers/transformMovies';
import { Movie } from 'types';

interface MoviesState {
  results: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  results: [],
};

export const fetchAllMovies = createAsyncThunk<
  Movie[],
  { year: number },
  { rejectValue: string }
>('movies/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      // `https://restcountries.com/v3.1/currency/${params.currency}`
      `https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&s=war&type=&y=${params.year}&p=`
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
      state.results.push(...payload);
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
