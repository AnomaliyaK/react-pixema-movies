import styled from 'styled-components';
import { COLOR } from 'ui';

export const StyledMovieDetailsCard = styled.div`
  display: grid;
  grid-template-columns: 266px 1fr;
  gap: 42px;
  color: ${COLOR.WHITE};
  width: 1186px;
`;
export const PosterWithButton = styled.div`
  width: 266px;
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
