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

  ${MEDIA.$_1024} {
  }
`;

export const GroupLogo = styled.div`
  grid-area: a;
`;

export const GroupNav = styled.div`
  grid-area: d;
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
`;

export const SearchInputGroup = styled.div`
  grid-area: b;
`;
export const SignInLink = styled.div`
  grid-area: c;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 16px 0;
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
`;
export const StyledOutlet = styled.div`
  grid-area: e;
`;
export const Email = styled.div`
  display: grid;
  align-items: center;
`;
