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
      headline: style.fontsHeadline,
      paragraph: style.fontsParagraph,
    },
    fontSizes: {},
  },
});

export default theme;
