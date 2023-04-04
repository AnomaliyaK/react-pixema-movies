import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FilterIcon } from "assets";
import { ROUTE } from "router";
import { deleteMoviesParameters, setMovieTitle, useAppDispatch, wipeOutMovies } from "store";
import { Input, InputSearchForm, OpenModalButton } from "./styles";

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
