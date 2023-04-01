import styled from "styled-components";
import { COLOR } from "ui/color";

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
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  /* position: fixed; */
`;

export const GroupLogo = styled.div`
  grid-area: a;
  /* position: fixed; */
`;

export const GroupNav = styled.div`
  grid-area: d;
  /* position: fixed; */
`;
export const GroupFooter = styled.div`
  grid-area: f;
  display: grid;
  align-items: center;

  /* position: fixed; */
`;

export const SearchInput = styled.input`
  grid-area: b;
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  /* position: fixed; */
`;
export const OpenModalButton = styled.button`
  grid-area: b;
  background-color: ${COLOR.GRAPHITE};
  width: 56px;
  justify-self: end;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  /* position: fixed;
  */
`;

export const SignInLink = styled.div`
  grid-area: c;
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: ${COLOR.WHITE};
  justify-content: center;
  align-content: center;
  background-color: ${COLOR.PRIMARY};
  padding: 16px 0;
  border-radius: 10px;

  /* position: fixed; */
`;

export const StyledOutlet = styled.div`
  grid-area: e;
`;
// export const Container = styled.div``;
