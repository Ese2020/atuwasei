import React from "react";
import { NavLink } from "../../atom";
import "./app.css";
import { SignUp } from "../../organism";
export const SignUpPage = () => {
  return (
    <>
      <main className="bg-lg-md">
        <div className="bg-img-md">
          <div className="back1">
            <NavLink to="/" className="backed2">
              ⟵
            </NavLink>
          </div>
        </div>
        <div className="bg-fm-md">
          <SignUp />
        </div>
      </main>
    </>
  );
};
