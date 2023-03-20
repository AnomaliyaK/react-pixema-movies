import React, { useEffect, useState } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';

export const FavoritesPage = () => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    fetch(
      'https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&type=&y=&p=&s=love'
    )
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <div>
      <h1>FavoritesPage</h1>
      <MovieList movies={movies} />
    </div>
  );
};
