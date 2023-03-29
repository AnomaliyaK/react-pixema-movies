import React from "react";
import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import { useEffect } from "react";
import { ShowMoreButton, StyledHomePage, WrapMovieList, WrapShowMoreButton } from "./styles";
import { fetchAllMovies, useAppDispatch, useAppSelector } from "store";

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies({ year: 2020 }));
  }, [dispatch]);

  return (
    <StyledHomePage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <WrapMovieList>{movies && movies.length > 0 && <MovieList movies={movies} />}</WrapMovieList>
      <WrapShowMoreButton>
        <ShowMoreButton>
          Show more
          {/* <Spinner /> */}
        </ShowMoreButton>
      </WrapShowMoreButton>
    </StyledHomePage>
  );
};
