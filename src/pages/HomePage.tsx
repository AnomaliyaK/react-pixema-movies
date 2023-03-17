import { Loader } from 'components/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store/moviesSlice/moviesSlice';

export const HomePage = () => {
  const { isLoading, results, error } = useAppSelector((state) => state.movies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies({ year: 2022 }));
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      {/* span ниже сделать компонентом <ErrorMessage message={error}/>*/}
      {error && <span>{error}</span>}
      {results && results.length > 0 && (
        <ul>
          {results.map((movie) => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
