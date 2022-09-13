import {
  ThemeElement,
  ThemeManagerConfig,
  THEME_AVAILABILITY,
} from "./Theme.types";

const DEFAULT_CONFIG: ThemeManagerConfig = {
  theme_id: THEME_AVAILABILITY.PLUTO_DARK,
};

export class ThemeManager {
  private config: ThemeManagerConfig;
  private theme_elements: ThemeElement[];

  constructor(config: ThemeManagerConfig = DEFAULT_CONFIG) {
    this.config = { ...config };
    this.theme_elements = [];

    this.on_theme_init();
  }

  private on_theme_init() {}

  public getClassName(id: string): ThemeElement {
    const theme_element = this.theme_elements.find((x) => x.id === id);

    if (!theme_element) {
      throw new Error("Requesting theme for non-configured element");
    }

    return theme_element;
  }
}
