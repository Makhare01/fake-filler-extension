import { MainTemplate } from "templates";
import { useRoutes } from "react-router-dom";
import { routes } from "app/routes";

export const Root = () => {
  const allRoutes = useRoutes(routes);

  return <MainTemplate>{allRoutes}</MainTemplate>;
};
