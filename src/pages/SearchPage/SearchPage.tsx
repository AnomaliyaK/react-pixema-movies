import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, Loader, MovieList, Spinner } from "components";
import { getMoviesBySearch, useAppDispatch, useAppSelector } from "store";
import {
  fetchMoviesBySearch,
  fetchNextPageMoviesBySearch,
  nextPageMoviesBySearch,
} from "store/features/searchSlice/searchSlice";
import { ShowMoreButton, StyledSearchPage, WrapMovieList, WrapShowMoreButton } from "./styles";

export const SearchPage = () => {
  const { isLoading, movies, error, searchValue, page } = useAppSelector(getMoviesBySearch);
  // const { register } = useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchValue.s || searchValue.y || searchValue.type) dispatch(fetchMoviesBySearch(searchValue));
  }, [dispatch, searchValue]);

  const handleSearchByMovies = () => {
    dispatch(nextPageMoviesBySearch(true));
    dispatch(fetchNextPageMoviesBySearch({ searchValue, page }));
  };

  return (
    <StyledSearchPage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <WrapMovieList> {movies && movies.length > 0 && <MovieList movies={movies} />}</WrapMovieList>
      <WrapShowMoreButton>
        <ShowMoreButton onClick={handleSearchByMovies}>
          Show more
          {isLoading && <Spinner />}
        </ShowMoreButton>
      </WrapShowMoreButton>
    </StyledSearchPage>
  );
};
