import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  to: string;
  active?: boolean;
  children: ReactNode | string;
};

export const RouteNavLink = ({ to, active, children }: Props) => {
  return (
    <NavLink
      to={to}
      style={{
        ...(active && {
          color: "red",
        }),
        textDecoration: "none",
      }}
    >
      {children}
    </NavLink>
  );
};
