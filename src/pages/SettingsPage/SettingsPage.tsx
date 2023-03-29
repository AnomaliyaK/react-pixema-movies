import React from "react";
import { StyledSettingsPage } from "./styles";

export const SettingsPage = () => {
  return (
    <StyledSettingsPage>
      <h1>SettingsPage</h1>
      <div>
        <h2>Profile</h2>
        <p>Name</p>
        <input type="text" />
        <p>Email</p>
        <input type="text" />
      </div>
      <div>
        <h2>Password</h2>
        <p>Password</p>
        <input type="password" />
        <p>New password</p>
        <input type="password" />
        <p>Confirm password</p>
        <input type="password" />
      </div>
      <div>
        <h2>Color mode</h2>
        <p>Dark</p>
        <p>use dark thema</p>
      </div>
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </StyledSettingsPage>
  );
};
