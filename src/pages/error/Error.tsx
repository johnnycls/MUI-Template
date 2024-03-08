import { Box, Typography } from "@mui/material";
import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage =
      error.status + " " + (error.data.message || error.statusText);
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Oops</Typography>
      <Typography variant="body1">An unexpected error has occurred.</Typography>
      <Typography variant="body2">{errorMessage}</Typography>
    </Box>
  );
};

export default ErrorPage;
