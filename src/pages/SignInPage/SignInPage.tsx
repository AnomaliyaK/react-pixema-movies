import { FormSignIn } from 'components/FormSignIn/FormSignIn';
import React from 'react';

import { StyledSignInPage } from './styles';

export const SignInPage = () => {
  return (
    <StyledSignInPage>
      <FormSignIn />
    </StyledSignInPage>
  );
};
