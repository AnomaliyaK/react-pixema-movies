export interface DataMovieApi {
  Search: MovieApi[];
  totalResults: number;
  Response: boolean;
}

export interface DataMovie {
  movies: MovieApi[];
  totalResults: number;
  response: boolean;
}

export interface MovieApi {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Movie {
  title: string;
  year: number;
  id: string;
  type: string;
  poster: string;
}
