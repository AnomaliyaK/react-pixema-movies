import { Portal, PortalTarget } from "components";
import React from "react";
import {
  BattonGroup,
  ButtonClearFilter,
  ButtonShowResults,
  CloseFilterButton,
  FormFilters,
  Input,
  InputGroup,
  StyledError,
  StyledFilters,
  SubTitle,
  Title,
  TitleGroup,
} from "./styles";
import { CloseIcon } from "assets";
import { useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import {
  deleteMoviesParameters,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
} from "store/features/searchSlice/searchSlice";
import { CustomSelect } from "components/CustomSelect/CustomSelect";

interface FiltersProps {
  title: string;
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}
export interface Option {
  readonly value: OptionType;
  readonly label: string;
}
type OptionType = "movie" | "series" | "episode";

const options: Option[] = [
  { value: "series", label: "series" },
  { value: "movie", label: "movie" },
  { value: "episode", label: "episode" },
];

interface FormFilterValues {
  s: string;
  y: string;
  type: Option;
}

export const Filters = ({ title, isOpen, toggleModal }: FiltersProps) => {
  const closeFilters = () => {
    toggleModal(false);
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFilterValues> = (filter) => {
    navigate(ROUTE.SEARCH);
    dispatch(deleteMoviesParameters());
    dispatch(wipeOutMovies());
    dispatch(setMovieTitle(filter.s));
    dispatch(setMovieYear(filter.y));
    dispatch(setMovieType(filter.type));
  };

  const handleResetFilter = () => {
    reset();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFilterValues>();

  return (
    <Portal target={PortalTarget.FILTERS}>
      {isOpen && (
        <StyledFilters>
          <FormFilters onSubmit={handleSubmit(onSubmit)}>
            <TitleGroup>
              <Title>{title}</Title>
              <CloseFilterButton onClick={closeFilters}>
                <CloseIcon />
              </CloseFilterButton>
            </TitleGroup>
            <InputGroup>
              <div>
                <SubTitle>Full or short movie name</SubTitle>
                <Controller
                  defaultValue=""
                  control={control}
                  name="s"
                  rules={{
                    required: "title is required",
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "the field contain only letters",
                    },
                    maxLength: {
                      value: 15,
                      message: "the field should contain no more than 15 letters",
                    },
                  }}
                  render={({ field: { ref, ...rest } }) => <Input {...rest} placeholder="Your text" type="text" />}
                />
                {errors.s?.message && <StyledError>{errors.s.message}</StyledError>}
              </div>
              <div>
                <SubTitle>Years</SubTitle>
                <Controller
                  defaultValue=""
                  control={control}
                  name="y"
                  rules={{
                    required: "year is required",
                    maxLength: { value: 4, message: "max 4 numbers" },
                    pattern: {
                      value: /[0-9]/,
                      message: "Please enter a valid year",
                    },
                  }}
                  render={({ field: { ref, ...rest } }) => <Input {...rest} placeholder="Year" type="text" />}
                />
                {errors.y?.message && <StyledError>{errors.y.message}</StyledError>}
              </div>
              <div>
                <SubTitle>Movie Types</SubTitle>
                <Controller
                  control={control}
                  name="type"
                  render={({ field: { value, onChange } }) => (
                    <CustomSelect value={value} onChange={onChange} options={options} />
                  )}
                />
              </div>
            </InputGroup>

            <BattonGroup>
              <ButtonClearFilter onClick={handleResetFilter}>Clear filter</ButtonClearFilter>
              <ButtonShowResults type="submit">Show results</ButtonShowResults>
            </BattonGroup>
          </FormFilters>
        </StyledFilters>
      )}
    </Portal>
  );
};
