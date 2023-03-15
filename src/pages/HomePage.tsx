import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store/moviesSlice/moviesSlice';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies);
  }, [dispatch]);

  return <div></div>;
};
