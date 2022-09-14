import { THEME_AVAILABILITY } from "./theming/Theme.types";
import { ThemeManager } from "./theming/ThemeManager";

export class PlutoLib {
  Theme!: ThemeManager;

  constructor() {
    this.Theme = new ThemeManager({ theme_id: THEME_AVAILABILITY.PLUTO_DARK });
  }
}

export const pluto_lib = new PlutoLib();
