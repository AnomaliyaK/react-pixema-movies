import { ErrorMessage, Loader, MovieDetailsCard } from "components";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, useAppDispatch, useAppSelector } from "store";
import { StyledDetailsPage } from "./styles";

export const MovieDetailsPage = () => {
  const { movieDetails, isLoading, error } = useAppSelector((state) => state.movieDetails);
  const { title = "" } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails({ title }));
  }, [dispatch, title]);

  return (
    <StyledDetailsPage>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieDetails && <MovieDetailsCard movieDetails={movieDetails} />}
    </StyledDetailsPage>
  );
};

// const navigate = useNavigate();
// const handleback = () => {
//   navigate(-1);
// };

// return   {/* <button onClick={handleback}>Back</button> */}
