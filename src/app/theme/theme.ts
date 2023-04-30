import { createTheme } from "@mui/material";

const ContracticaRegular = "Contractica-regular";
const ContracticaMedium = "Contractica-medium";
const ContracticaBold = "Contractica-bold";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#def3ee",
      light: "#f2f9f9",
    },
    success: {
      main: "#62b2a3",
    },
    text: {
      primary: "#43585f",
      secondary: "#c5ced2",
      disabled: "#9EA3B6",
    },
    background: {
      default: "#FFF",
    },
    divider: "#EDEEF2",
    error: {
      main: "#C70008",
    },
    info: {
      main: "#1F68FA",
    },
    warning: {
      main: "#FBA930",
    },
  },
});

const { pxToRem } = theme.typography;

theme.typography = {
  ...theme.typography,

  h1: {
    fontFamily: ContracticaBold,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
    fontWeight: 600,
    letterSpacing: "0.68px",
  },

  h2: {
    fontFamily: ContracticaBold,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    letterSpacing: "0.52px",
  },

  h3: {
    fontFamily: ContracticaBold,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(21),
    fontWeight: 600,
    letterSpacing: "0.45px",
  },

  h4: {
    fontFamily: ContracticaBold,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(21),
    fontWeight: 600,
    letterSpacing: "0.45px",
  },

  body1: {
    fontFamily: ContracticaMedium,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(19),
    fontWeight: 400,
    letterSpacing: "0.52px",
  },

  body2: {
    fontFamily: ContracticaMedium,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(18),
    fontWeight: 400,
    letterSpacing: "0.52px",
  },

  caption: {
    fontFamily: ContracticaRegular,
    display: "inline-block",
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: 400,
    letterSpacing: "0.52px",
  },

  button: {
    fontFamily: ContracticaRegular,
    fontSize: pxToRem(10),
    lineHeight: pxToRem(20),
    fontWeight: 700,
    letterSpacing: "0.6px",
    textTransform: "uppercase",
  },
};

theme.components = {
  ...theme.components,

  MuiTypography: {
    defaultProps: {
      marginBottom: -0.5,
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: "contained" },
        style: {
          boxShadow:
            "0px 1px 3px -1px rgba(0, 0, 0, 0.3), 0px 2px 5px -1px rgba(50, 50, 93, 0.25)",
          "&:hover": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.3), 0px 3px 6px -1px rgba(50, 50, 93, 0.25)",
          },
          "&:focus": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.3), 0px 3px 6px -1px rgba(50, 50, 93, 0.25)",
          },
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          boxShadow:
            "0px 1px 3px -1px rgba(0, 0, 0, 0.15), 0px 2px 5px -1px rgba(50, 50, 93, 0.12)",
          "&:hover": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.15), 0px 3px 4px -1px rgba(50, 50, 93, 0.12)",
          },
          "&:focus": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.15), 0px 3px 4px -1px rgba(50, 50, 93, 0.12)",
          },
        },
      },
    ],
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        border: "1px solid",
        borderColor: theme.palette.divider,
        boxShadow: "inset 0px 1px 4px rgba(0, 14, 62, 0.04)",

        "&:hover:not(.Mui-disabled)": {
          boxShadow:
            "inset 0px 1px 4px rgba(0, 14, 62, 0.04), 0px 1px 2px rgba(77, 86, 120, 0.1)",
        },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
      },
    },
  },
};
