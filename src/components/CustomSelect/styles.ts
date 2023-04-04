import { StylesConfig } from "react-select";
import { Option } from "types";

export const selectStyles: StylesConfig<Option> = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#323537",
    border: "none",
    borderRadius: "10px",
    height: "56px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#323537",
    textAlign: "center",
    color: "#80858B",
    fontSize: "16px",
    fontWeight: "500",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    display: "grid",
    placeItems: "center",
    backgroundColor: state.isSelected ? "#7B61FF" : state.isFocused ? "#917CFF" : "#323537",
  }),
};
