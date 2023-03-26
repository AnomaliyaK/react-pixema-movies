import React from 'react';
import { Loader, MovieList } from 'components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store/moviesSlice/moviesSlice';
import { StyledHomePage, StyledShowMoreButton } from './styles';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Spinner } from 'components/Spinner/Spinner';

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const { email, creationTime, isAuth } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchAllMovies({ year: 2020 }));
  }, [dispatch]);

  return (
    <StyledHomePage>
      {isAuth && (
        <>
          <h1>Email: {email}</h1>
          <p>Creation Time: {creationTime}</p>
        </>
      )}

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {movies && movies.length > 0 && <MovieList movies={movies} />}
      <StyledShowMoreButton>
        Show more
        <Spinner />
      </StyledShowMoreButton>
    </StyledHomePage>
  );
};
