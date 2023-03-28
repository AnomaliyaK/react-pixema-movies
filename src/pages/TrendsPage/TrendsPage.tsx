import { Loader, MovieList } from "components";
import { ShowMoreButton, StyledHomePage } from "pages/HomePage/styles";
import React, { useEffect, useState } from "react";
import { fetchTrendsMovies, useAppDispatch, useAppSelector } from "store";

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
      <ShowMoreButton>Show more</ShowMoreButton>
    </StyledHomePage>
  );
};
