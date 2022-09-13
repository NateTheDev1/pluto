export type ThemeElement = {
  id: string;
  defaultThemeSettings: string[];
};

export enum THEME_AVAILABILITY {
  PLUTO_DARK,
  PLUTO_LIGHT,
}

export type ThemeManagerConfig = {
  theme_id: THEME_AVAILABILITY;
};
