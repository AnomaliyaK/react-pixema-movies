import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowLeftIcon, ArrowRightIcon } from "assets";
import { Arrows, NextButton, PreviousButton, Slick, SlideContainer, Title, TitleSlider } from "./styles";
import { Movie } from "types";
import { Slide } from "components";

interface SliderProps {
  movies: Movie[];
}
export const SliderRecomendation = ({ movies }: SliderProps) => {
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    margin: 10,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Title>
        <TitleSlider>Recommendations</TitleSlider>
        <Arrows>
          <PreviousButton className="prev_btn">
            <ArrowLeftIcon />
          </PreviousButton>
          <NextButton className="next_btn">
            <ArrowRightIcon />
          </NextButton>
        </Arrows>
      </Title>
      <SlideContainer>
        <Slick>
          <Slider {...settings}>
            {movies.map((movie) => {
              return <Slide movie={movie} key={movie.id} />;
            })}
          </Slider>
        </Slick>
      </SlideContainer>
    </>
  );
};
