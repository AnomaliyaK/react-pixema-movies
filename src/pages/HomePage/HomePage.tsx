import { useEffect } from "react";
import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import { fetchAllMovies, fetchNextPageMovies, getMovies, nextMoviePage, useAppDispatch, useAppSelector } from "store";
import { ShowMoreButton, StyledHomePage, WrapMovieList, WrapShowMoreButton } from "./styles";

export const HomePage = () => {
  const { isLoading, movies, error, page, themeMovies } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies({ themeMovies }));
  }, [dispatch]);

  const handleMovies = () => {
    dispatch(nextMoviePage(true));
    dispatch(fetchNextPageMovies({ themeMovies, page }));
  };

  return (
    <StyledHomePage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <WrapMovieList>{movies && movies.length > 0 && <MovieList movies={movies} />}</WrapMovieList>
      <WrapShowMoreButton>
        <ShowMoreButton onClick={handleMovies}>
          Show more
          {isLoading && <Spinner />}
        </ShowMoreButton>
      </WrapShowMoreButton>
    </StyledHomePage>
  );
};
