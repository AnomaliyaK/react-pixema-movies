import { CustomLink } from 'components/CustomLink/CustomLink';
import React from 'react';
import { ROUTE } from 'router/routes';

export const FormSignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form action="">
        <p>Email</p>
        <input type="text" placeholder="Your email" />
        <p>Password</p>
        <input type="password" placeholder="Your password" />
        <CustomLink to={ROUTE.RESET_PASSWORD}>Forgot password?</CustomLink>
        <button type="submit">Sign in</button>
      </form>
      <p>Don't have an account?</p>
      <CustomLink to={ROUTE.SIGN_UP}>Sign Up</CustomLink>
    </div>
  );
};
