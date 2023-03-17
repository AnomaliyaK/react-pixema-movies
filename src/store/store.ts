import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice/moviesSlice';
import searchReducer from './searchSlice/searchSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,

    // добавить и для всех остальных страниц favorites,search и тд
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
