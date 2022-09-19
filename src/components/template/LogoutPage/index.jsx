import React from "react";
import { Logout } from "../../organism";
import { NavLink } from "../../atom";
import "./app.css";

export const LogoutPage = () => {
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
          <Logout />
        </div>
      </main>
    </>
  );
};
