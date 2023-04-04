import { useEffect } from "react";
import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import { fetchTrendsMovies, getTrendsMovies, nextTrendsMoviePage, useAppDispatch, useAppSelector } from "store";
import { fetchNextPageTrendsMovies } from "store";
import { ShowMoreButton, StyledTrendsPage, WrapMovieList, WrapShowMoreButton } from "./styles";

export const TrendsPage = () => {
  const { isLoading, movies, error, page, year } = useAppSelector(getTrendsMovies);
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
      <WrapMovieList> {movies && movies.length > 0 && <MovieList movies={movies} />}</WrapMovieList>
      <WrapShowMoreButton>
        <ShowMoreButton onClick={handleTrendsMovies}>
          Show more
          {isLoading && <Spinner />}
        </ShowMoreButton>
      </WrapShowMoreButton>
    </StyledTrendsPage>
  );
};
