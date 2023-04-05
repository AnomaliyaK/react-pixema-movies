import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);
  return { value, onChange };
};
