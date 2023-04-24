const randomThemeMovies = ["Potter", "World", "War", "Love", "Time", "Live", "Future", "Paris", "Animals", "Holiday"];

export const getRandomThemeMovie = () => {
  const randomThemeMovie = randomThemeMovies[(Math.random() * randomThemeMovies.length) | 0];
  return randomThemeMovie;
};
