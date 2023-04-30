import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./root";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { CircularProgress, ThemeProvider } from "@mui/material";
import { AbsolutelyCentered } from "ui/utils";
import { theme } from "app/theme";
import "./styles/index.css";
import "./styles/fonts.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense
          fallback={
            <AbsolutelyCentered>
              <CircularProgress />
            </AbsolutelyCentered>
          }
        >
          <Root />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
