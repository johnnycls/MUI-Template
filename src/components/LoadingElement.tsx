import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Skeleton } from "@mui/material";
import React from "react";

type LoadingElementProps = {
  isLoading: boolean;
  component: ReactJSXElement;
  variant?: "circular" | "rectangular" | "rounded" | "text";
  width?: string;
  height?: string;
};

const LoadingElement: React.FC<LoadingElementProps> = ({
  isLoading,
  component,
  variant,
  width,
  height,
}) =>
  isLoading ? (
    <Skeleton variant={variant} width={width} height={height} />
  ) : (
    component
  );

export default LoadingElement;
