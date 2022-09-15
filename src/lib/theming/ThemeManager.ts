import { ModuleStatus } from "../types/generic";
import { default_theme_state, ThemeState } from "./Theme.state";
import {
  ThemeElement,
  ThemeManagerConfig,
  THEME_AVAILABILITY,
} from "./Theme.types";
import { theme_reader } from "./_utils";

const DEFAULT_CONFIG: ThemeManagerConfig = {
  theme_id: THEME_AVAILABILITY.PLUTO_DARK,
};

export class ThemeManager {
  state: ThemeState;
  config: ThemeManagerConfig;

  theme_elements!: ThemeElement[];

  constructor(config: ThemeManagerConfig = DEFAULT_CONFIG) {
    this.config = { ...config };

    this.theme_elements = [];

    this.state = { ...default_theme_state };

    this.state.status = ModuleStatus.INITIALIZING;

    this.on_theme_init();
  }

  private async on_theme_init() {
    const elements: any = await theme_reader(this.config);

    if (!elements) {
      this.state.status = ModuleStatus.FAILED;
      return;
    }

    this.theme_elements = elements;

    this.state.status = ModuleStatus.RUNNING;
  }

  public getClassName(id: string) {
    const theme_element = this.theme_elements.find((x) => x.id === id);

    if (!theme_element) {
      console.warn("Requesting theme for non-configured element");
      return {};
    }

    return theme_element.defaultThemeSettings;
  }

  public getHoverClassName(id: string) {
    const theme_element = this.theme_elements.find((x) => x.id === id);

    if (!theme_element) {
      console.warn("Requesting theme for non-configured element");
      return {};
    }

    return theme_element.hover;
  }
}
