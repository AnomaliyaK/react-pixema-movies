import { MovieList } from "components";
import React, { useEffect, useState } from "react";

export const FavoritesPage = () => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=c28df97b&type=&y=&p=&s=love")
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
