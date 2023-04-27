import Select, { SingleValue } from "react-select";
import { selectStyles } from "./styles";
import { Option } from "types";

interface SelectProps {
  options: Option[];
  value: Option;
  onChange: (option: Option) => void;
}

export const CustomSelect = ({ onChange, options, value }: SelectProps) => {
  const handleChange = (option: SingleValue<Option>): void => {
    if (option) onChange(option);
  };
  return (
    <Select
      isMulti={false}
      isSearchable={false}
      options={options}
      onChange={handleChange}
      styles={selectStyles}
      value={value}
      // defaultValue={options[1]}
    />
  );
};
