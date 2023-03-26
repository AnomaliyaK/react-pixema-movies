import { Spinner } from 'components/Spinner/Spinner';
import React from 'react';
import { StyledLoader } from './styles';

export const Loader = () => {
  return (
    <StyledLoader>
      <Spinner />
      Loading...
    </StyledLoader>
  );
};
