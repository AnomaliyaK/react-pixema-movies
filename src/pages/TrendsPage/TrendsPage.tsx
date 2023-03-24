import { MovieList } from 'components';
import { Loader } from 'components/Loader/Loader';
import { StyledHomePage, StyledShowMoreButton } from 'pages/HomePage/styles';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchTrendsMovies } from 'store/trendsSlice/trendsSlice';

export const TrendsPage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrendsMovies({ year: 2023 }));
  }, [dispatch]);

  return (
    <StyledHomePage>
      {isLoading && <Loader />}
      {/* span ниже сделать компонентом <ErrorMessage message={error}/>*/}
      {error && <span>{error}</span>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      <StyledShowMoreButton>
        Show more
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </StyledShowMoreButton>
    </StyledHomePage>
  );
};
