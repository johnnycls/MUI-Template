import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  primary,
  secondary,
  error,
  warning,
  success,
  primaryDark,
  secondaryDark,
} from "../palette";
import { useAppSelector } from "./store";
import CssBaseline from "@mui/material/CssBaseline";

const App: React.FC = () => {
  const isLightMode = useAppSelector((state) => state.preference.isLightMode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: isLightMode
          ? {
              primary,
              secondary,
              error,
              warning,
              success,
              mode: "light",
            }
          : {
              primary: primaryDark,
              secondary: secondaryDark,
              error,
              warning,
              success,
              mode: "dark",
            },
      }),
    [isLightMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
