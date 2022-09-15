import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";
import { THEME_AVAILABILITY } from "./theming/Theme.types";
import { ThemeManager } from "./theming/ThemeManager";
import { AppVersion } from "./types/generic";

export class PlutoLib {
  version!: AppVersion;
  Theme!: ThemeManager;

  constructor() {
    this.Theme = new ThemeManager({ theme_id: THEME_AVAILABILITY.PLUTO_DARK });

    this.load_version();
  }

  async load_version() {
    const ver: AppVersion = JSON.parse(
      await fs.readTextFile("version.json", {
        dir: BaseDirectory.Resource,
      })
    );

    this.version = { ...ver };
  }
}

export const pluto_lib = new PlutoLib();
