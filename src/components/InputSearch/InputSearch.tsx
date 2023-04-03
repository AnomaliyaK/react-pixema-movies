import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { deleteMoviesParameters, setMovieTitle, wipeOutMovies } from "store/features/searchSlice/searchSlice";
import { Input, InputSearchForm, OpenModalButton } from "./styles";
import { FilterIcon } from "assets";

interface InputSearchProps {
  toggleModal: (value: boolean) => void;
}

interface FormInputSearchValues {
  s: string;
}

export const InputSearch = ({ toggleModal }: InputSearchProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<FormInputSearchValues>();
  const openModal = () => {
    toggleModal(true);
  };
  const onSubmit: SubmitHandler<FormInputSearchValues> = (title) => {
    navigate(ROUTE.SEARCH);
    dispatch(deleteMoviesParameters());
    dispatch(wipeOutMovies());
    dispatch(setMovieTitle(title.s));
    reset();
  };

  return (
    <InputSearchForm onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Search" type={"text"} {...register("s")} />
      <OpenModalButton type="button" onClick={openModal}>
        <FilterIcon />
      </OpenModalButton>
    </InputSearchForm>
  );
};
