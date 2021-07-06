import fonts from "./fonts";

const breakpointValues = {
  xs: 0,
  sm: 596,
  md: 800,
  lg: 1000,
  xl: 1333,
};

const commonSettings = {
  direction: "ltr",
  typography: {
    fontSize: 16,
    fontFamily: "Square",
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      letterSpacing: "1.3px",
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.875rem",
    },
    // h8: {
    //   fontSize: "0.75rem",
    // },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1,
    },
    button: {
      textTransform: "none",
      fontSize: "1.25rem",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": fonts,
        breakpoints: { values: breakpointValues },
        body: {
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiToolbar: {
      root: {
        justifyContent: "flex-end",
      },
    },
    MuiPaper: {
      root: {
        "&.ohm-card": {
          padding: "20px 20px 20px 20px",
          borderRadius: "10px",
          backdropFilter: "blur(60px)",
          maxWidth: "833px",
          minWidth: "333px",
          width: "97%",
          // margin: "auto",
          marginBottom: "1.8rem",
          borderRadius: "10px",
        },
      },
    },
    MuiContainer: {
      root: {
        backgroundColor: "transparent",
        flexGrow: 1,
      },
    },
    MuiLink: {
      root: {
        textUnderlineOffset: ".33rem",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "none",
          underline: 0,
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 0,
        fontSize: "1rem",
      },
      head: {
        color: "#999999",
      },
    },
    MuiDrawer: {
      root: {
        width: "280px",
        flexShrink: 0,
      },
      paper: {
        width: "inherit",
        backgroundColor: "#00000000",
        padding: 0,
        square: true,
        rounded: false,
        zIndex: 10,
      },
    },
    MuiBackdrop: {
      root: {
        backdropFilter: "blur(33px)",
      },
    },
    MuiToggleButton: {
      root: {
        border: 0,
        borderRadius: "5px",
        margin: "8px",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "5px",
        textTransform: "none",
        textDecoration: "none",
        whiteSpace: "nowrap",
      },
      containedPrimary: {
        border: 0,
        fontWeight: "500",
      },
      containedSecondary: {
        fontWeight: "400",
      },
      outlinedPrimary: {},
      outlinedSecondary: {
        textTransform: "none",
        textDecoration: "none",
      },
      textPrimary: {},
      textSecondary: {
        textTransform: "none",
        textDecoration: "none",
        padding: "2px 2px",
        "&:hover": {
          backgroundColor: "#00000000",
        },
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: true,
      noWrap: true,
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiTypograph: {
      gutterBottom: true,
      noWrap: true,
    },
    MuiLink: {
      underlineHover: false,
    },
  },
};

export default commonSettings;
