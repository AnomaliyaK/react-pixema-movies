import styled from "styled-components";
import { MEDIA } from "ui";

export const StyledFavoritesPage = styled.div`
  /* display: grid;
  height: 100%;
  justify-items: center;
  align-items: center; */
`;

export const WrapNotFavoriteMovies = styled.div`
  display: grid;
  gap: 32px;
  max-height: 357px;
  max-width: 266px;
  text-align: center;

  ${MEDIA.$_768} {
    max-height: 365px;
    max-width: 272px;
  }
  ${MEDIA.$_530} {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const NotFavoriteMovies = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: none;
  object-fit: cover;
  object-position: top;
`;
