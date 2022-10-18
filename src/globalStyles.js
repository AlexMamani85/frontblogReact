import { css } from "@emotion/react";
import { COLORS } from "./constants";

export const globalStyles = css`
  /*
    CSS Reset
    https://piccalil.li/blog/a-modern-css-reset/
  */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }
  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  #root {
    /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
    isolation: isolate;
  }
  html {
    --color-white: hsl(${COLORS.white});
    --color-background: hsl(${COLORS.background});
    --color-primary: hsl(${COLORS.primary});
    --color-secondary: hsl(${COLORS.secondary});
    --color-tertiary: hsl(${COLORS.tertiary});
    --color-text: hsl(${COLORS.text});
    --color-gray-50: hsl(${COLORS.gray[50]});
    --color-gray-100: hsl(${COLORS.gray[100]});
    --color-gray-200: hsl(${COLORS.gray[200]});
    --color-gray-300: hsl(${COLORS.gray[300]});
    --color-gray-400: hsl(${COLORS.gray[400]});
    --color-gray-500: hsl(${COLORS.gray[500]});
    --color-gray-600: hsl(${COLORS.gray[600]});
    --color-gray-700: hsl(${COLORS.gray[700]});
    --color-gray-800: hsl(${COLORS.gray[800]});
    --color-gray-900: hsl(${COLORS.gray[900]});
    --color-gray-1000: hsl(${COLORS.gray[1000]});
    --color-info: hsl(${COLORS.info});
    --color-success: hsl(${COLORS.success});
    --color-warning: hsl(${COLORS.warning});
    --color-danger: hsl(${COLORS.danger});
  }
  html,
  body,
  #root {
    height: 100%;
    background-color: var(--color-background);
  }
`;