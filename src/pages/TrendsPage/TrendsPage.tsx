import { useEffect } from "react";
import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import { fetchTrendsMovies, getTrendsMovies, nextTrendsMoviePage, useAppDispatch, useAppSelector } from "store";
import { fetchNextPageTrendsMovies } from "store";
import { ShowMoreButton, StyledTrendsPage, WrapMovieList, WrapShowMoreButton } from "./styles";

export const TrendsPage = () => {
  const { isLoading, trends, error, page, year, themeMovies } = useAppSelector(getTrendsMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrendsMovies({ themeMovies, year }));
  }, [dispatch]);

  const handleTrendsMovies = () => {
    dispatch(nextTrendsMoviePage(true));
    dispatch(fetchNextPageTrendsMovies({ themeMovies, year, page }));
  };

  return (
    <StyledTrendsPage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <WrapMovieList> {trends && trends.length > 0 && <MovieList movies={trends} isTrends />}</WrapMovieList>
      <WrapShowMoreButton>
        <ShowMoreButton onClick={handleTrendsMovies}>
          Show more
          {isLoading && <Spinner />}
        </ShowMoreButton>
      </WrapShowMoreButton>
    </StyledTrendsPage>
  );
};
