import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformMovieDetails } from 'mappers/transformMovieDetails';
import { Movie, MovieDetails } from 'types';

interface MovieDetailsState {
  movieDetails: MovieDetails;
  isLoading: boolean;
  error: string | null;
  recommendations: Movie[];
}

const initialState: MovieDetailsState = {
  isLoading: false,
  error: null,
  movieDetails: {} as MovieDetails,
  recommendations: [],
};

export const fetchMovieDetails = createAsyncThunk<
  MovieDetails,
  { title: string },
  { rejectValue: string }
>('movieDetails/fetchMovieDetails', async (title, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      //
      `https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&s=&type=&plot=&y=&p=&plot=full&t=${title}`
    );

    const transformedMovieDetails = transformMovieDetails(data);
    return transformedMovieDetails;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieDetails.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movieDetails = payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default movieDetailsSlice.reducer;
