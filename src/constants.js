export const COLORS = {
    white: "0deg 0% 100%",
    gray: {
      50: "225deg, 40%, 96%",
      100: "225deg, 25%, 92%",
      200: "225deg, 8%, 80%",
      300: "225deg, 8%, 70%",
      400: "225deg, 7%, 60%",
      500: "225deg, 7%, 60%",
      600: "225deg, 15%, 50%",
      700: "225deg, 12%, 40%",
      800: "225deg, 20%, 30%",
      900: "225deg, 25%, 20%",
      1000: "225deg, 15%, 15%",
    },
    text: "233deg, 9%, 19%",
    background: "60, 100%, 100%",
    primary: "250deg, 80%, 60%",
    secondary: "250deg, 80%, 90%",
    tertiary: "0deg, 72%, 62%",
    info: "213deg, 94%, 68%",
    success: "158deg, 64%, 52%",
    warning: "43deg, 96%, 56%",
    danger: "0deg, 91%, 71%",
  };
  
  export const WEIGHTS = {
    light: 400,
    medium: 500,
    bold: 600,
  };
  
  export const SIZES = {
    sm: `${14 / 16}rem`,
    md: `${16 / 16}rem`,
    lg: `${18 / 16}rem`,
    xl: `${20 / 16}rem`,
    "2xl": `${24 / 16}rem`,
    "3xl": `${28 / 16}rem`,
    "4xl": `${32 / 16}rem`,
    "5xl": `${40 / 16}rem`,
  };
  
  export const BREAKPOINTS = {
    phone: 563,
    tablet: 768,
  };
  
  export const QUERIES = {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  };