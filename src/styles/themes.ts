import { createTheme } from "@nextui-org/react";
import style from "./_style.module.scss";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: style.colorsPrimary,
      primaryLight: style.colorsAltPrimaryLight,
      primaryHover: style.colorsPrimaryHover,
      primaryActive: style.colorsPrimaryActive,
      secondary: style.colorsSecondary,
      secondaryLight: style.colorsSecondaryLight,
      secondaryHover: style.colorsSecondaryHover,
      secondaryActive: style.colorsSecondaryActive,
      altPrimary: style.colorsAltPrimary,
      altPrimaryLight: style.colorsAltPrimaryLight,
      altPrimaryHover: style.colorsAltPrimaryHover,
      altPrimaryActive: style.colorsAltPrimaryActive,
      altSecondary: style.colorsAltSecondary,
      altSecondaryLight: style.colorsAltSecondaryLight,
      altSecondaryHover: style.colorsAltSecondaryHover,
      altSecondaryActive: style.colorsAltSecondaryActive,
      tertiary: style.colorsTertiary,
      danger: style.colorsDanger,
      success: style.colorsSuccess,
      black: style.colorsBlack,
      white: style.colorsWhite,
    },
    space: {},
    fonts: {
      sans: style.fontsSans,
      cursive: style.fontsCursive,
    },
    fontSizes: {
      sm: style.fontSizesSm,
      base: style.fontSizesBase,
      lg: style.fontSizesLg,
      xl: style.fontSizesXl,
      "2xl": style.fontSizesXl2,
      "3xl": style.fontSizesXl3,
      "4xl": style.fontSizesXl4,
      "5xl": style.fontSizesXl5,
      "6xl": style.fontSizesXl6,
      "7xl": style.fontSizesXl7,
    },
  },
});

export default theme;
