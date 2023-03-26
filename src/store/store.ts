import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/moviesSlice/moviesSlice';
import searchReducer from './features/searchSlice/searchSlice';
import userReducer from './features/userSlice/userSlice';
import movieDetailsReducer from './features/movieDetailsSlice/movieDetailsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
    user: userReducer,
    movieDetails: movieDetailsReducer,

    // добавить и для всех остальных страниц favorites,search и тд
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
