import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from "types";
import { Slide } from "components";
import { Slick, SlideContainer, StyledSliderRecomendation, Title, TitleSlider } from "./styles";

interface SliderProps {
  movies: Movie[];
}
export const SliderRecomendation = ({ movies }: SliderProps) => {
  const settings = {
    centerMode: true,
    centerPadding: "5px",
    slidesToShow: 3,
    speed: 500,
    margin: 10,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <StyledSliderRecomendation>
      <Title>
        <TitleSlider>Recommendations</TitleSlider>
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
    </StyledSliderRecomendation>
  );
};
