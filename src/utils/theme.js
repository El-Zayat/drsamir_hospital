import * as React from 'react';
import { DefaultTheme,configureFonts} from 'react-native-paper';
import {colors,Fonts  } from "./appTheme";

const {Family}=Fonts

const fontConfig = {
    default: {
      regular: {
        fontFamily:Family.Regular,
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: Family.Black,
        fontWeight: 'normal',
      },
      light: {
        fontFamily: Family.Light,
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: Family.ExtraLight,
        fontWeight: 'normal',
      },
    },
  };

export const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    placeholder:"#cbcbcb",
    background :colors.white,
    text:colors.textGray,
    error:"red"
  },
  fonts: configureFonts(fontConfig),
};