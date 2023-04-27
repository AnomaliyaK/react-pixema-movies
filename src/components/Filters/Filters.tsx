import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useOutsideClick } from "hooks";
import { CloseIcon } from "assets";
import { CustomSelect, InputFilter, Portal, PortalTarget } from "components";
import { ROUTE } from "router";
import {
  useAppDispatch,
  deleteMoviesParameters,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
} from "store";
import {
  BattonGroup,
  ButtonClearFilter,
  ButtonShowResults,
  CloseFilterButton,
  FormFilters,
  InputGroup,
  StyledError,
  StyledFilters,
  SubTitle,
  Title,
  TitleGroup,
} from "./styles";

interface FiltersProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}

interface Option {
  readonly value: OptionType;
  readonly label: string;
}
type OptionType = "movie" | "series" | "episode";

interface SearchValue {
  s: string;
  y: string;
  type: Option;
}

const options: Option[] = [
  { value: "series", label: "series" },
  { value: "movie", label: "movie" },
  { value: "episode", label: "episode" },
];

export const Filters = ({ isOpen, toggleModal }: FiltersProps) => {
  const closeFilters = () => {
    toggleModal(false);
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const closeRef = useRef(null);
  useOutsideClick(closeRef, closeFilters, isOpen);

  const onSubmit: SubmitHandler<SearchValue> = (filter) => {
    navigate(ROUTE.SEARCH);
    dispatch(deleteMoviesParameters());
    dispatch(wipeOutMovies());
    dispatch(setMovieTitle(filter.s));
    dispatch(setMovieYear(filter.y));
    // dispatch(setMovieType(filter.type));
  };

  const handleResetFilter = () => {
    reset();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchValue>();

  return (
    <Portal target={PortalTarget.FILTERS}>
      {isOpen && (
        <StyledFilters ref={closeRef}>
          <FormFilters onSubmit={handleSubmit(onSubmit)}>
            <TitleGroup>
              <Title>Filters</Title>
              <CloseFilterButton>
                <CloseIcon onClick={closeFilters} />
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
                    required: "movie title is required",
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "movie title contains only letters",
                    },
                    maxLength: {
                      value: 15,
                      message: "movie title can't contain more than 15 letters",
                    },
                    minLength: {
                      value: 3,
                      message: "movie title must contain more than 3 letters",
                    },
                  }}
                  render={({ field: { ref, ...rest } }) => (
                    <InputFilter {...rest} placeholder="Your text" type="text" />
                  )}
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
                    maxLength: { value: 4, message: "max 4 numbers" },
                    pattern: {
                      value: /[0-9]/,
                      message: "Please, enter a valid year",
                    },
                  }}
                  render={({ field: { ref, ...rest } }) => <InputFilter {...rest} placeholder="Year" type="text" />}
                />
                {errors.y?.message && <StyledError>{errors.y.message}</StyledError>}
              </div>
              {/* <div>
                <SubTitle>Movie Types</SubTitle>
                <Controller
                  control={control}
                  name="type"
                  render={({ field: { value, onChange } }) => (
                    <CustomSelect
                      value={value}
                      options={options}
                      onChange={(options) => options && onChange(options.value)}
                    />
                  )}
                />
              </div> */}
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
