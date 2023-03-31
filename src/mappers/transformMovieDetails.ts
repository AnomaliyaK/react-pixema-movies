import { MovieDetails, MovieDetailsApi } from "types";

export const transformMovieDetails = (movieDetails: MovieDetailsApi): MovieDetails => {
  return {
    title: movieDetails.Title,
    id: movieDetails.imdbID,
    genre: movieDetails.Genre,
    runtime: movieDetails.Runtime,
    imdbRating: movieDetails.imdbRating,
    poster: movieDetails.Poster,
    year: movieDetails.Year,
    released: movieDetails.Released,
    boxOffice: movieDetails.BoxOffice,
    country: movieDetails.Country,
    production: movieDetails.Production,
    actors: movieDetails.Actors,
    plot: movieDetails.Plot,
    director: movieDetails.Director,
    writers: movieDetails.Writer,
  };
};
