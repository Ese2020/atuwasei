import React from "react";
import { Login } from "../../organism/Login";
import { NavLink } from "../../atom";
import "./app.css";
export const LoginPage = () => {
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
          <Login />
        </div>
      </main>
    </>
  );
};
