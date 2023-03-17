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

// export interface MovieDetailsApi {
//   Title: string;
//   Year: string;
//   Rated: string;
//   Released: string;
//   Runtime: string;
//   Genre: string;
//   Director: string;
//   Writer: string;
//   Actors: string;
//   Plot: string;
//   Language: string;
//   Country: string;
//   Awards: string;
//   Poster: string;
//   Ratings: RatingsApi[];
//   Metascore: string;
//   imdbRating: string;
//   imdbVotes: string;
//   imdbID: string;
//   Type: string;
//   DVD: string;
//   BoxOffice: string;
//   Production: string;
//   Website: string;
//   Response: string;
// }

// export interface RatingsApi {
//   Source: string;
//   Value: string;
// }
