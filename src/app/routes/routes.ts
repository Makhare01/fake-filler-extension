import { Route, createRoute, paths } from ".";

export const routes: Array<Route> = [
  createRoute({
    path: paths.dashboard,
    factory: () => import("pages/dashboard"),
  }),
  createRoute({
    path: paths.customFields,
    factory: () => import("pages/custom-fields"),
  }),
  createRoute({
    path: paths.shortcuts,
    factory: () => import("pages/shortcuts"),
  }),
  // createRoute({
  //   path: "*",
  //   factory: () => import("pages/not-found"),
  // }),
];
