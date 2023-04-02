import React from "react";
import { useEffect } from "react";
import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import { fetchAllMovies, getMovies, useAppDispatch, useAppSelector } from "store";
import { ShowMoreButton, StyledHomePage, WrapMovieList, WrapShowMoreButton } from "./styles";
import { fetchNextPageMovies, nextMoviePage } from "store/features/moviesSlice/moviesSlice";

export const HomePage = () => {
  const { isLoading, movies, error, page } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies({ page }));
  }, [dispatch]);

  const handleMovies = () => {
    dispatch(nextMoviePage(true));
    dispatch(fetchNextPageMovies({ page }));
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
