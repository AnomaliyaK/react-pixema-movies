import { MovieList } from 'components';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store/moviesSlice/moviesSlice';
import { StyledHomePage, StyledShowMoreButton } from './styles';

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies({ year: 2022 }));
  }, [dispatch]);

  return (
    <StyledHomePage>
      {isLoading && <Loader />}
      {/* span ниже сделать компонентом <ErrorMessage message={error}/>*/}
      {error && <span>{error}</span>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      <StyledShowMoreButton>
        Show more{' '}
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </StyledShowMoreButton>
    </StyledHomePage>
  );
};
