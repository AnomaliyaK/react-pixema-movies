import styled from "styled-components";
import { Typography } from "ui";
import { COLOR } from "ui/color";
import { MEDIA } from "ui/media";

export const StyledMainTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 60px 40px;
  grid-template-rows: 56px 1fr 40px;
  grid-template-areas:
    "a b b b b c "
    "d e e e e e "
    "f e e e e e ";
  min-height: 100vh;
  min-width: 100vh;
  padding: 40px 62px 64px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.BLACK};

  ${MEDIA.$_1440} {
    grid-template-columns: repeat(4, 1fr);
    padding: 40px 128px 64px;
    grid-template-areas:
      "a b b c "
      "d e e e "
      "f e e e ";
  }
  ${MEDIA.$_1280} {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 48px 32px;
    padding: 40px 176px 56px;
    grid-template-areas:
      "a a b b b b b c "
      "e e e e e e e e"
      "e e e e e e e e";
  }
  ${MEDIA.$_1024} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 56px 1fr 40px;
    padding: 40px 40px 56px;
    grid-gap: 48px 32px;
    grid-template-areas:
      "a a b b b c "
      "e e e e e e"
      "e e e e e e";
  }
  ${MEDIA.$_768} {
    grid-template-columns: repeat(6, 1fr);
    padding: 40px 40px 56px;
    grid-gap: 48px 32px;
    grid-template-areas:
      "a a b b b c "
      "e e e e e e"
      "e e e e e e";
  }
  @media (max-width: 500px) {
    display: grid;
    justify-content: center;
    width: 272px;
    grid-template-columns: repeat(2, 136px);
    grid-template-rows: 56px 56px 1fr 40px;
    grid-template-areas:
      "a  c  "
      "b b "
      "e e "
      "e e ";
    padding: 40px 40px 56px;
  }
`;

export const GroupLogo = styled.div`
  grid-area: a;
`;

export const GroupNav = styled.div`
  grid-area: d;
  ${MEDIA.$_1280} {
    display: none;
  }
`;
export const ToggleThemeButtons = styled.div`
  justify-content: center;
  align-content: center;
  width: 70%;
  margin-top: 40px;
  padding: 16px 0;
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
`;
export const GroupFooter = styled.div`
  grid-area: f;
  display: grid;
  align-items: center;
  ${MEDIA.$_1280} {
    display: none;
  }
`;

export const SearchInputGroup = styled.div`
  grid-area: b;
`;
export const UserInfoWrap = styled.div`
  grid-area: c;
  ${MEDIA.$_1280} {
    display: none;
  }
`;
export const StyledOutlet = styled.div`
  grid-area: e;
`;
