import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import {
  themes,
  tokens as tamaguiTokens,
  lightColors,
  darkColors,
} from "@tamagui/themes";
import { createTamagui, createTokens } from "tamagui";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const headingFont = createInterFont();

const bodyFont = createInterFont();
export const tokens = createTokens({
  ...tamaguiTokens,
  radius: {
    1: "4px", // xs
    2: "8px", // s
    3: "16px", // m
    4: "24px", // l
    5: "32px", // xl
    6: "40px", // xxl
    true: "50%", // round
  },
  color: {
    white: "#ffffff",
    black: "#202020",
    otherBlack: "#2c2c2c",
    greyBase: "#909090",
    greyLight1: "#a6a6a6",
    greyLight2: "#bcbcbc",
    greyLight3: "#d2d2d2",
    greyLight4: "#e9e9e9",
    greyLight5: "#f5f6f7",
    greyLight6: "#f9f9f9",
    greyDark1: "#797979",
    greyDark2: "#636363",
    greyDark3: "#4d4d4d",
    greyDark4: "#363636",
    greyDark5: "#2c2c2c",
    greyDark6: "#202020",
    greenBase: "#e5f8bc",
    greenLight1: "#e8f9c3",
    greenLight2: "#eaf9c9",
    greenLight3: "#edfad0",
    greenLight4: "#effbd7",
    greenLight5: "#f2fcde",
    greenDark1: "#cedfa9",
    greenDark2: "#b7c696",
    greenDark3: "#a0ae84",
    greenDark4: "#899571",
    greenDark5: "#737c5e",
    blueBase: "#b1dde4",
    blueLight1: "#b9e0e7",
    blueLight2: "#c1e4e9",
    blueLight3: "#c8e7ec",
    blueLight4: "#d0ebef",
    blueLight5: "#d8eef2",
    blueDark1: "#9fc7cd",
    blueDark2: "#8eb1b6",
    blueDark3: "#7c9ba0",
    blueDark4: "#6a8589",
    blueDark5: "#596f72",
  },
});

const config = createTamagui({
  animations,
  defaultTheme: "dark",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    light: {
      accentText: tokens.color.black,
      badgeBackground: tokens.color.greyLight4,
      badgeText: tokens.color.greyDark2,
      cartButtonText: tokens.color.greyBase,
      bannerBackground: tokens.color.blueBase,
      buttonClear: "transparent",
      buttonClearHover: tokens.color.greyLight5,
      buttonPrimary: tokens.color.greyDark6,
      buttonPrimaryHover: tokens.color.greyDark5,
      buttonSecondary: tokens.color.greenBase,
      buttonSecondaryHover: tokens.color.greenDark1,
      buttonText: tokens.color.white,
      cardBackground: tokens.color.greyLight6,
      checkoutTopBackground: tokens.color.greenBase,
      checkoutBottomBackground: tokens.color.greyLight6,
      formBackground: tokens.color.white,
      foodItemBackground: tokens.color.white,
      footerBackground: tokens.color.greyDark5,
      headerBackground: tokens.color.white,
      restaurantDetailBackground: tokens.color.white,
      headerBorder: tokens.color.greyLight4,
      inputBackground: tokens.color.greyLight5,
      inputHint: tokens.color.greyDark1,
      inputIcon: tokens.color.greyDark6,
      label: tokens.color.greyDark4,
      labelActive: tokens.color.greyDark6,
      menuSectionBackground: tokens.color.greyLight6,
      stepsIndicatorInnerBar: tokens.color.greyDark6,
      stepsIndicatorOuterBar: tokens.color.greyLight5,
      orderSummaryBackground: tokens.color.white,
      overlayBackground: tokens.color.white,
      overlayHeader: tokens.color.greyLight5,
      primaryText: tokens.color.otherBlack,
      reviewText: tokens.color.blueDark5,
      screenBackground: tokens.color.white,
      sidebarHeader: tokens.color.greyDark4,
      sidebarFooter: tokens.color.white,
      skeletonBase: tokens.color.greyLight4,
      skeletonHighlight: tokens.color.greyLight5,
      topBannerBackground: tokens.color.greenBase,
      newRestaurantTag: tokens.color.greenBase,
      white: tokens.color.white,
      black: tokens.color.black,
    },
    dark: {
      badgeBackground: tokens.color.greyDark4,
      badgeText: tokens.color.greyLight1,
      cartButtonText: tokens.color.greyDark2,
      bannerBackground: tokens.color.greyDark5,
      buttonClearHover: tokens.color.greyDark4,
      buttonPrimary: tokens.color.greenBase,
      buttonPrimaryHover: tokens.color.greenDark1,
      buttonSecondary: tokens.color.greenBase,
      buttonText: tokens.color.otherBlack,
      cardBackground: tokens.color.greyDark5,
      checkoutTopBackground: tokens.color.greyDark6,
      checkoutBottomBackground: tokens.color.greyDark1,
      formBackground: tokens.color.greyDark5,
      foodItemBackground: tokens.color.otherBlack,
      headerBackground: tokens.color.greyDark6,
      restaurantDetailBackground: tokens.color.greyDark5,
      headerBorder: tokens.color.greyDark4,
      inputBackground: tokens.color.greyDark4,
      inputIcon: tokens.color.white,
      inputHint: tokens.color.greyLight1,
      label: tokens.color.greyLight4,
      labelActive: tokens.color.white,
      menuSectionBackground: tokens.color.greyDark6,
      stepsIndicatorInnerBar: tokens.color.greenBase,
      stepsIndicatorOuterBar: tokens.color.greyDark4,
      orderSummaryBackground: tokens.color.greyDark5,
      overlayBackground: tokens.color.greyDark5,
      overlayHeader: tokens.color.greyDark4,
      primaryText: tokens.color.white,
      reviewText: tokens.color.blueBase,
      screenBackground: tokens.color.greyDark6,
      sidebarHeader: tokens.color.greyDark4,
      sidebarFooter: tokens.color.greyDark5,
      skeletonBase: tokens.color.greyDark3,
      skeletonHighlight: tokens.color.greyDark2,
      topBannerBackground: tokens.color.greyDark5,
      accentText: tokens.color.black,
      buttonClear: "transparent",
      buttonSecondaryHover: tokens.color.greenDark1,
      footerBackground: tokens.color.greyDark5,
      newRestaurantTag: tokens.color.greenBase,
      white: tokens.color.white,
      black: tokens.color.black,
    },
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
