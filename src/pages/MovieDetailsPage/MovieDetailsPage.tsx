import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { ErrorMessage, Loader } from 'components';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'store/features/movieDetailsSlice/movieDetailsSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { MovieDetails } from 'types';
import { StyledDetailsPage } from './styles';

export const MovieDetailsPage = () => {
  const { movieDetails, isLoading, error } = useAppSelector(
    (state) => state.movieDetails
  );
  const { title } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleback = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchMovieDetails({ title: 'Avengers: Infinity War' }));
  }, [dispatch, title]);

  return (
    <StyledDetailsPage>
      <h1>{title}</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <button onClick={handleback}>Back</button>
    </StyledDetailsPage>
  );
};
