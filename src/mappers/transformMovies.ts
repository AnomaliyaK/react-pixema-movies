import { DataMovie, DataMovieApi, Movie } from 'types';

export const transformAPI = (dataMovies: DataMovieApi): DataMovie[] => {
  return Object.values(dataMovies).map(
    ({ Search, totalResults, Response }) => ({
      movies: Search,
      totalResults: totalResults,
      response: Response,
    })
  );
};

export const transformMovies = (dataMovies: DataMovieApi): Movie[] => {
  const transformedAPI = transformAPI(dataMovies);
  return transformedAPI[0].map(({ Title, Year, imdbID, Type, Poster }) => ({
    title: Title,
    year: Year,
    id: imdbID,
    type: Type,
    poster: Poster,
  }));
};

// export const transformMovies = (dataMovies: DataMovieApi): Movie[] => {
//   return dataMovies.Search.map(({ Title, Year, imdbID, Type, Poster }) => ({
//     title: Title,
//     year: Year,
//     id: imdbID,
//     type: Type,
//     poster: Poster,
//   }));
// };
