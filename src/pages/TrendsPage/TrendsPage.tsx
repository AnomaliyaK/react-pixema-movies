import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import React, { useEffect, useState } from "react";
import { fetchTrendsMovies, useAppDispatch, useAppSelector } from "store";
import { ShowMoreButton, StyledTrendsPage, WrapMovieList, WrapShowMoreButton } from "./styles";
import { getTrendsMovies } from "store/selectors/getTrendsMovies";
import { fetchNextPageTrendsMovies, nextTrendsMoviePage } from "store/features/trendsSlice/trendsSlice";

export const TrendsPage = () => {
  const { isLoading, trends, error, page, year } = useAppSelector(getTrendsMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrendsMovies({ year }));
  }, [dispatch]);

  const handleTrendsMovies = () => {
    dispatch(nextTrendsMoviePage(true));
    dispatch(fetchNextPageTrendsMovies({ page }));
  };

  return (
    <StyledTrendsPage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <WrapMovieList> {trends && trends.length > 0 && <MovieList movies={trends} />}</WrapMovieList>
      <WrapShowMoreButton>
        <ShowMoreButton onClick={handleTrendsMovies}>
          Show more
          {isLoading && <Spinner />}
        </ShowMoreButton>
      </WrapShowMoreButton>
    </StyledTrendsPage>
  );
};
