import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ to, children, className, ...props }) => {
  return (
    <Link to={to} {...props} className={className}>
      {children}
    </Link>
  );
};
