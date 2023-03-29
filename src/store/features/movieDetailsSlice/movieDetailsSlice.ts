import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieDetails, transformMovies } from "mappers";
import { Movie, MovieDetails, MovieDetailsApi } from "types";

interface MovieDetailsState {
  movieDetails: MovieDetails;
  isLoading: boolean;
  error: string | null;
  // recommendations: Movie[];
}

const initialState: MovieDetailsState = {
  isLoading: false,
  error: null,
  movieDetails: {} as MovieDetails,
  // recommendations: [],
};

export const fetchMovieDetails = createAsyncThunk<
  MovieDetails,
  { title: string },
  { rejectValue: string }
>("movieDetails/fetchMovieDetails", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<MovieDetailsApi>(
      `https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&s=&type=&plot=&y=&p=&plot=full&t=${params.title}`,
    );

    const transformedMovieDetails = transformMovieDetails(data);
    return transformedMovieDetails;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

export const fetchMoviesRecomendation = createAsyncThunk<
  Movie[],
  { year: number },
  { rejectValue: string }
>("movies/fetchMoviesRecomendation", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&s=world&type=&plot=&y=${params.year}&p=&plot=full&t=`,
    );
    console.log(data);
    const transformedMovies = transformMovies(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

const movieDetailsSlice = createSlice({
  name: "movieDetails",
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
