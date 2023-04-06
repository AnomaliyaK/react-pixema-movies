import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage, Loader, MovieDetailsCard } from "components";
import { fetchMovieDetails, getMovieDetails, useAppDispatch, useAppSelector } from "store";
import { StyledDetailsPage, WrapDetails } from "./styles";

export const MovieDetailsPage = () => {
  const { movieDetails, isLoading, error } = useAppSelector(getMovieDetails);
  const { title = "" } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails({ title }));
  }, [dispatch, title]);

  return (
    <StyledDetailsPage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieDetails && (
        <WrapDetails>
          <MovieDetailsCard movieDetails={movieDetails} />
        </WrapDetails>
      )}
    </StyledDetailsPage>
  );
};
