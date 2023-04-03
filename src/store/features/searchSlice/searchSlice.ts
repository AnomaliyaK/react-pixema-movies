import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovies } from "mappers";
import { Movie } from "types";
import { Option } from "types/types";
interface SearchValue {
  s: string;
  y: string;
  type: Option | string;
  // page: number;
}
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
  searchValue: { s: "", y: "", type: "" },
};

export const fetchMoviesBySearch = createAsyncThunk<Movie[], SearchValue, { rejectValue: string }>(
  "search/fetchMoviesBySearch",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${params.s}&type=${params.type}&plot=&y=${params.y}&apikey=c28df97b&page=`,
      );
      const transformedMovies = transformMovies(data);
      return transformedMovies;
    } catch (error) {
      const { message } = error as AxiosError;

      return rejectWithValue(message);
    }
  },
);

// export const fetchNextPageMoviesBySearch = createAsyncThunk<Movie[], SearchValue, { rejectValue: string }>(
//   "search/fetchNextPageMoviesBySearch",
//   async (params, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         `https://www.omdbapi.com/?s=${params.s}&type=${params.type}&plot=&y=${params.y}&apikey=c28df97b&page=${
//           params.page + 1
//         }`,
//       );
//       const transformedMovies = transformMovies(data);
//       return transformedMovies;
//     } catch (error) {
//       const { message } = error as AxiosError;
//       return rejectWithValue(message);
//     }
//   },
// );

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setMovieTitle: (state, { payload }: PayloadAction<string>) => {
      state.searchValue.s = payload;
    },

    setMovieYear: (state, { payload }: PayloadAction<string>) => {
      state.searchValue.y = payload;
    },

    setMovieType: (state, { payload }: PayloadAction<Option>) => {
      state.searchValue.type = payload;
    },

    wipeOutMovies(state) {
      state.movies = [];
    },
    deleteMoviesParameters(state) {
      state.searchValue = {
        s: "",
        type: "",
        y: "",
      };
    },
    // nextPageMoviesBySearch(state, { payload }) {
    //   payload ? (state.searchValue.page = state.searchValue.page + 1) : (state.searchValue.page = 1);
    // },
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
    // builder.addCase(fetchNextPageMoviesBySearch.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(fetchNextPageMoviesBySearch.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.movies = [...state.movies, ...payload];
    //   state.error = null;
    // });
    // builder.addCase(fetchNextPageMoviesBySearch.rejected, (state, { payload }) => {
    //   if (payload) {
    //     state.isLoading = false;
    //     state.error = payload;
    //   }
    // });
  },
});
export const {
  setMovieTitle,
  setMovieYear,
  setMovieType,
  deleteMoviesParameters,
  wipeOutMovies,
  // nextPageMoviesBySearch,
} = searchSlice.actions;

export default searchSlice.reducer;
