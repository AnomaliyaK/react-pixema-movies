import { Portal, PortalTarget } from 'components/Portal/Portal';
import React from 'react';

export const Modal = () => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <div>Modal!!!</div>
    </Portal>
  );
};
