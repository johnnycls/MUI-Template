type color = {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
};

const primary: color = {
  main: "#3ab395",
  light: "#f5f5f5",
  dark: "#3f3d56",
};

const secondary: color = {
  main: "#80eacf",
  light: "#e6fcf6",
  dark: "#70d1b2",
};

const error: color = {
  main: "#f44336",
  light: "#ef9a9a",
  dark: "#c62828",
};

const warning: color = {
  main: "#ffe57f",
  light: "#fff8e1",
  dark: "#ffc107",
};

const success: color = {
  main: "#00e676",
  light: "#b9f6ca",
  dark: "#00c853",
};

const primaryDark: color = {
  main: "#2196f3",
  light: "#e3f2fd",
  dark: "#1e88e5",
};

const secondaryDark: color = {
  main: "#7c4dff",
  light: "#d1c4e9",
  dark: "#651fff",
};

export {
  primary,
  secondary,
  error,
  warning,
  success,
  primaryDark,
  secondaryDark,
};
