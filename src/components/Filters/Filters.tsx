import { Portal, PortalTarget } from "components";
import React from "react";

interface FiltersProps {
  title: string;
  onClick: () => void;
}

export const Filters = ({ title, onClick }: FiltersProps) => {
  return (
    <Portal target={PortalTarget.FILTERS}>
      <div onClick={onClick}>
        <h1>{title}</h1>

        <p>Sort by</p>
        <p>Full or short movie name</p>
        <input type="text" placeholder="Your text" />
        <p>Years</p>
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button>Clear filter</button>
        <button>Show results</button>
      </div>
    </Portal>
  );
};
