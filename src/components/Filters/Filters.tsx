import { Portal, PortalTarget } from 'components/Portal/Portal';
import React from 'react';

interface FiltersProps {
  title: string;
  onClick: () => void;
}

export const Filters = ({ title, onClick }: FiltersProps) => {
  return (
    <Portal target={PortalTarget.FILTERS}>
      <div onClick={onClick}>
        <h1>{title}</h1>
      </div>
    </Portal>
  );
};
