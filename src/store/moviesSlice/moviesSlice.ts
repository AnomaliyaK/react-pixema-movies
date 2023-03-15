import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface MoviesState {
  results: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  results: [],
};

export const fetchAllMovies = createAsyncThunk('movies/fetchAll', async () => {
  const { data } = await axios.get('https://restcountries.com/v3.1/all');
  return data;
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
      state.isLoading = false;
    });
  },
});

export default moviesSlice.reducer;
