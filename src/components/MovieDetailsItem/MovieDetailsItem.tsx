import { MovieDetailsItemLabel, MovieDetailsItemValue, StyledMovieDetailsItem } from "./styles";

interface MovieDetailsItemProps {
  label: string;
  value: string;
}

export const MovieDetailsItem = ({ label, value }: MovieDetailsItemProps) => {
  return (
    <StyledMovieDetailsItem>
      <MovieDetailsItemLabel>{label}</MovieDetailsItemLabel>
      <MovieDetailsItemValue>{value}</MovieDetailsItemValue>
    </StyledMovieDetailsItem>
  );
};
