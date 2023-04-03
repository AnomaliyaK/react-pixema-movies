import { RootState } from "store";

export const getMoviesBySearch = (state: RootState) => state.search;
