import { Portal, PortalTarget } from "components";
import React from "react";
import {
  BattonGroup,
  ButtonClearFilter,
  ButtonShowResults,
  CloseFilter,
  FormFilters,
  Input,
  InputGroup,
  StyledFilters,
  SubTitle,
  Title,
  TitleGroup,
} from "./styles";
import { CloseIcon } from "assets";

interface FiltersProps {
  title: string;
  onClick: () => void;
}

export const Filters = ({ title, onClick }: FiltersProps) => {
  return (
    <Portal target={PortalTarget.FILTERS}>
      <StyledFilters onClick={onClick}>
        <FormFilters action="">
          <TitleGroup>
            <Title>{title}</Title>
            <CloseFilter>
              <CloseIcon />
            </CloseFilter>
          </TitleGroup>
          <InputGroup>
            <div>
              <SubTitle>Full or short movie name</SubTitle>
              <Input type="text" placeholder="Your text" />
            </div>
            <div>
              <SubTitle>Years</SubTitle>
              <Input type="text" placeholder="Year" />
            </div>
            <div>
              <SubTitle>Movie Types</SubTitle>
              <Input type="text" placeholder="Year" />
            </div>
          </InputGroup>

          <BattonGroup>
            <ButtonClearFilter>Clear filter</ButtonClearFilter>
            <ButtonShowResults>Show results</ButtonShowResults>
          </BattonGroup>
        </FormFilters>
      </StyledFilters>
    </Portal>
  );
};
