import React from "react";

interface FormProps {
  heading: string;
}

export const Form = ({ heading }: FormProps) => {
  return <div>{heading}</div>;
};
