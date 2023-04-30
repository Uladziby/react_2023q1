/** @format */

export interface IColors {
  [style: string]: string;
}

export const COLOR_PALETTE: IColors = {
  success: '#4CAF50',
  notification: '#4054B2',
  error: '#F2453D',
  red20: '#f2453d33',
  warning: '#4CAF50',
  yellow50: '#FFFDE7',
  yellow100: '#FFF59D',
  yellow200: '#FFF9C4',
  yellow300: '#FFF176',
  yellow700: '#FFD600',
  yellow800: '#EDC700',
  white: '#FFF',
  lighten10: '#3B3B3B',
  lighten20: '#555555',
  lighten30: '#FFF59D',
  lighten40: '#AFAFAF',
  lighten50: '#EDEDED',
  lighten60: '#F2F2F2',
  lighten70: '#F7F7F7',
  lighten80: '#FCFCFC',
  lighten100: '#FFFFFF',
  black: '#000',
  black75: 'rgba(0, 0, 0, 0.75)',
  transparent: 'transparent',
};

export const BUTTON_COLORS: IColors = {
  secondaryDefault: COLOR_PALETTE.gray300,
  secondaryDisabled: COLOR_PALETTE.gray300,
  secondaryHover: COLOR_PALETTE.gray400,
  primaryHover: COLOR_PALETTE.yellow800,
  primaryDefault: COLOR_PALETTE.yellow700,
  primaryDisabled: COLOR_PALETTE.yellow300,
  disabled: COLOR_PALETTE.gray600,
  basicWhite: COLOR_PALETTE.white,
  defaultFill: COLOR_PALETTE.gray700,
};

export const INPUT_COLORS: IColors = {
  disabled: COLOR_PALETTE.gray400,
  default: COLOR_PALETTE.gray600,
  error: COLOR_PALETTE.error,
  search: COLOR_PALETTE.gray150,
  success: COLOR_PALETTE.success,
  focused: COLOR_PALETTE.gray700,
};

export const SLIDER_COLORS: IColors = {
  black: '#000000',
  white: '#FFFFFF',
  yellow: '#FFFF00',
};
