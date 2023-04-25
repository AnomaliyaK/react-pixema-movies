import React from "react";
import { Movie } from "types";
import { SlideMovie, SlidePoster, Title } from "./styles";

interface SlideProps {
  movie: Movie;
}

export const Slide = ({ movie: { title, poster } }: SlideProps) => {
  return (
    <SlideMovie to={`/details/${title}`}>
      <SlidePoster src={poster} />
      <Title>{title}</Title>
    </SlideMovie>
  );
};
