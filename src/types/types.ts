interface DataMovieApi {
  Search: MovieApi[];
  totalResults: string;
  Response: string;
}

interface DataMovie {
  movies: Movie[];
  totalResults: string;
  response: string;
}

interface MovieApi {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface Movie {
  title: string;
  year: string;
  id: string;
  type: string;
  poster: string;
}

interface MovieDetailsApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingsApi[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface RatingsApi {
  Source: string;
  Value: string;
}

interface MovieDetails {
  title: string;
  id: string;
  type: string;
  genre: string;
  runtime: string;
  imdbRating: string;
  poster: string;
  year: string;
  released: string;
  boxOffice: string;
  country: string;
  production: string;
  actors: string;
  plot: string;
  director: string;
  writers: string;
}

interface AuthFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SearchValue {
  s: string;
  y: string;
  type: string;
  // page: number;
}
interface Option {
  readonly value: OptionType;
  readonly label: string;
}
type OptionType = "movie" | "series" | "episode";

export type {
  DataMovieApi,
  DataMovie,
  MovieApi,
  Movie,
  MovieDetailsApi,
  MovieDetails,
  RatingsApi,
  AuthFormValues,
  SearchValue,
  Option,
  OptionType,
};
