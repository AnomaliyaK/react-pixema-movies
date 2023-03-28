import styled from "styled-components";
import { COLOR } from "ui";

export const StyledMovieDetailsCard = styled.div`
  display: grid;
  grid-template-columns: 266px 1fr;
  gap: 42px;
  color: ${COLOR.WHITE};
  width: 1186px;
`;
export const PosterWithButton = styled.div`
  width: 266px;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
`;

export const FavoriteButton = styled.button`
  width: 50%;
  padding: 24px 19px;
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px 0 0 10px;
  border: none;
  border-right: 2px solid ${COLOR.BLACK};
  cursor: pointer;
  color: ${COLOR.LIGHT};
  height: 100%;
`;

export const ShareButton = styled.button`
  width: 50%;
  height: 100%;
  padding: 19px;
  background-color: ${COLOR.GRAPHITE};
  border-radius: 0 10px 10px 0;
  border: none;
  cursor: pointer;
  color: ${COLOR.LIGHT};
`;

export const PosterDetails = styled.img`
  border-radius: 20px;
  width: 266px;
  height: 356px;
  margin-bottom: 32px;
  border: none;
`;

export const DescriptionMovie = styled.div`
  display: grid;
  gap: 40px;
`;

export const MainInfoMovie = styled.div`
  display: grid;
`;

export const GenreMovie = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${COLOR.LIGHT};
`;
export const TitleMovie = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 60px;
  color: ${COLOR.WHITE};
  margin-bottom: 24px;
`;
export const Badges = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${COLOR.WHITE};
`;
export const Rating = styled.span`
  background-color: ${COLOR.GREEN};
  padding: 2px 8px;
  border-radius: 6px;
  margin-right: 20px;
`;

export const IMDb = styled.span`
  background-color: ${COLOR.GRAPHITE};
  padding: 2px 8px;
  border-radius: 6px;
  margin-right: 20px;
`;

export const Runtime = styled.span`
  background-color: ${COLOR.GRAPHITE};
  padding: 2px 8px;
  border-radius: 6px;
`;
export const Plot = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const FullDescription = styled.div`
  display: grid;
  gap: 20px;
`;
export const GroupButton = styled.div`
  height: 56px;
`;
