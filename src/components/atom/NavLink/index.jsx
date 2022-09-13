import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const NavLink = ({ to, children, className, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={className}>
      {children}
    </Link>
  );
};
