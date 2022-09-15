export type ThemeElement = {
  id: string;
  defaultThemeSettings: Record<string, string>;
  hover: Record<string, string>;
};

export enum THEME_AVAILABILITY {
  PLUTO_DARK,
  PLUTO_LIGHT,
}

export type ThemeManagerConfig = {
  theme_id: THEME_AVAILABILITY;
};

export type FSThemeJSON = {
  theme_id: string;
  elements: ThemeElement[];
};
