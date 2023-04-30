import { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";
import { lazy, ComponentType } from "react";

export type Route = IndexRouteObject | NonIndexRouteObject;

type Params = {
  path: string;
  factory: () => Promise<{
    default: ComponentType<any>;
  }>;
  children?: Array<Route>;
};

export const createRoute = ({ path, factory, children }: Params): Route => {
  const Component = lazy(factory);

  return {
    path,
    children,
    element: <Component />,
  };
};
