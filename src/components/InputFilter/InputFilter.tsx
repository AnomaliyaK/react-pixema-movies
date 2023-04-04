import { InputHTMLAttributes } from "react";
import { StyledInputFilter } from "./styles";

interface InputFilterProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputFilter = ({ type, placeholder, ...rest }: InputFilterProps) => {
  return <StyledInputFilter type={type} placeholder={placeholder} {...rest} />;
};
