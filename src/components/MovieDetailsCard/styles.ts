import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const StyledMovieDetailsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 503px;
  grid-template-areas:
    "a b b b . "
    ". c c c c ";
  gap: 56px 42px;
  color: ${COLOR.WHITE};

  ${MEDIA.$_1440} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "a b b "
      ". c c ";
  }
  ${MEDIA.$_768} {
    gap: 40px 32px;
  }
  ${MEDIA.$_530} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: min-content min-content min-content;
    grid-template-areas:
      "a "
      "b ";
  }
`;
export const PosterWithButton = styled.div`
  grid-area: a;
  max-width: 266px;
  ${MEDIA.$_530} {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const AddFavoriteButton = styled.button`
  width: 50%;
  height: 100%;
  padding: 24px 19px;
  fill: ${COLOR.LIGHT};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px 0 0 10px;
  border: none;
  border-right: 2px solid ${COLOR.BLACK};
  cursor: pointer;

  &:active {
    fill: ${COLOR.PRIMARY};
  }
`;

export const DeleteFavoriteButton = styled.button`
  width: 50%;
  height: 100%;
  padding: 24px 19px;
  fill: ${COLOR.PRIMARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px 0 0 10px;
  border: none;
  border-right: 2px solid ${COLOR.BLACK};
  cursor: pointer;

  &:active {
    fill: ${COLOR.SECONDARY};
  }
`;

export const ShareButton = styled.button`
  width: 50%;
  height: 100%;
  padding: 19px;
  fill: ${COLOR.LIGHT};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 0 10px 10px 0;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.PRIMARY};
  }
`;
export const PosterDetails = styled.img`
  width: 100%;
  max-width: 266px;
  max-height: 356px;
  margin-bottom: 32px;
  border-radius: 20px;
  border: none;
  ${MEDIA.$_768} {
    max-height: 365px;
    max-width: 272px;
  }
  ${MEDIA.$_530} {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const DescriptionMovie = styled.div`
  grid-area: b;
  display: grid;
  gap: 40px;
`;
export const MainInfoMovie = styled.div`
  display: grid;
`;
export const GenreMovie = styled.span`
  ${Typography.S3}
  font-weight: 500;
`;
export const TitleMovie = styled.div`
  margin-bottom: 24px;
  ${Typography.H1}
`;
export const Badges = styled.div`
  ${Typography.S3}
`;
export const Rating = styled.span`
  padding: 2px 8px;
  margin-right: 20px;
  background-color: ${COLOR.GREEN};
  border-radius: 6px;
`;

export const IMDb = styled.span`
  padding: 2px 8px;
  background-color: ${COLOR.GRAPHITE};
  margin-right: 20px;
  border-radius: 6px;
`;

export const Runtime = styled.span`
  padding: 2px 8px;
  background-color: ${COLOR.GRAPHITE};
  border-radius: 6px;
`;
export const Plot = styled.p`
  ${Typography.S3}
  font-weight: 500;
`;

export const FullDescription = styled.div`
  display: grid;
  gap: 20px;
`;
export const GroupButton = styled.div`
  height: 56px;
`;
export const GroupSlider = styled.div`
  grid-area: c;
`;
