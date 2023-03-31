import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface SearchState {
  results: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  isLoading: false,
  error: null,
  results: [],
};

export const fetchAllSearch = createAsyncThunk<
  any[],
  { searchValue: string },
  { rejectValue: string }
>("search/fetchAll", async (params, { rejectWithValue }) => {
  try {
    // протипизировать метод get по-своему, те в этом файле все три any заменить на Movie[]
    const { data } = await axios.get<any[]>(
      `https://restcountries.com/v3.1/name/${params.searchValue}`,
    );

    // здесь мне надо const transformedMovies =   transformMovies (data)
    return data;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllSearch.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results.push(...payload);
    });
    builder.addCase(fetchAllSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;
