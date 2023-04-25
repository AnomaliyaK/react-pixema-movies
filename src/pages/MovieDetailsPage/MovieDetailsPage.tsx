import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage, Loader, MovieDetailsCard } from "components";
import { fetchAllMovies, fetchMovieDetails, getMovieDetails, getMovies, useAppDispatch, useAppSelector } from "store";
import { StyledDetailsPage } from "./styles";

export const MovieDetailsPage = () => {
  const { movieDetails, isLoading, error } = useAppSelector(getMovieDetails);
  const { title = "" } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails({ title }));
  }, [dispatch, title]);

  const { movies, themeMovies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchAllMovies({ themeMovies }));
  }, [dispatch, themeMovies]);

  return (
    <StyledDetailsPage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieDetails && <MovieDetailsCard movieDetails={movieDetails} movies={movies} />}
    </StyledDetailsPage>
  );
};
