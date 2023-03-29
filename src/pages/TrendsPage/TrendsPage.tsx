import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import React, { useEffect, useState } from "react";
import { fetchTrendsMovies, useAppDispatch, useAppSelector } from "store";
import { ShowMoreButton, StyledTrendsPage } from "./styles";

export const TrendsPage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrendsMovies({ year: 2023 }));
  }, [dispatch]);

  return (
    <StyledTrendsPage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      <ShowMoreButton>
        Show more
        <Spinner />
      </ShowMoreButton>
    </StyledTrendsPage>
  );
};
