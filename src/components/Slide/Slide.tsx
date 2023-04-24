import React from "react";
import { Movie } from "types";
import { SlideMovie, SlidePoster, Title } from "./styles";

interface SlideProps {
  movie: Movie;
}

export const Slide = ({ movie: { title, poster, id } }: SlideProps) => {
  return (
    <SlideMovie to={`/details/${id}`}>
      <SlidePoster src={poster} />
      <Title>{title}</Title>
    </SlideMovie>
  );
};
