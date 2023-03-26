import React from 'react';
import { Spinner } from 'components';
import { StyledLoader } from './styles';

export const Loader = () => {
  return (
    <StyledLoader>
      <Spinner />
      Loading...
    </StyledLoader>
  );
};
