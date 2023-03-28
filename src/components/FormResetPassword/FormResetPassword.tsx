import React from 'react';

export const FormResetPassword = () => {
  return (
    <div>
      <h1>Reset password</h1>
      <form action="">
        <p>Email</p>
        <input type="text" placeholder="Your email" />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};
