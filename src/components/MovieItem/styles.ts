import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const StyledMovieItem = styled.li`
  position: relative;
  display: grid;
  gap: 24px;
  width: 100%;
  transition: 0.6s;

  &:hover {
    scale: 1.05;
    transition: 0.3s;
  }

  ${MEDIA.$_1024} {
    gap: 20px;
  }

  ${MEDIA.$_530} {
  }
`;
export const WrapMovieItem = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 24px;
  height: 100%;

  ${MEDIA.$_1024} {
    gap: 20px;
  }
`;

export const WrapPoster = styled.div`
  max-height: 357px;
  max-width: 266px;

  ${MEDIA.$_768} {
    max-height: 365px;
    max-width: 272px;
  }
  ${MEDIA.$_530} {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: none;
  object-fit: cover;
  object-position: top;
`;

export const MovieTitle = styled.span`
  ${Typography.S2};

  ${MEDIA.$_1024} {
  }
`;
export const TrendLabel = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  padding: 4px 13px;
  background-color: ${COLOR.PRIMARY};
  border-radius: 6px;
`;

export const FavoriteLabel = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 4px 13px;
  background-color: ${COLOR.GRAPHITE};
  fill: ${COLOR.PRIMARY};
  border-radius: 6px;
`;
