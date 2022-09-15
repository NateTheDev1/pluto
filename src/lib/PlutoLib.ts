import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";
import { configDir } from "@tauri-apps/api/path";
import { THEME_AVAILABILITY } from "./theming/Theme.types";
import { ThemeManager } from "./theming/ThemeManager";
import { AppVersion, PlutoSettings } from "./types/generic";

export class PlutoLib {
  settings?: PlutoSettings;
  version!: AppVersion;
  Theme!: ThemeManager;

  constructor() {
    const tm = new ThemeManager({ theme_id: THEME_AVAILABILITY.PLUTO_DARK });

    this.Theme = tm;

    this.load_version();
    this.settings_check();
  }

  async settings_check() {
    let hasSettings = false;

    try {
      const configFiles = await fs.readDir(await configDir());

      configFiles.forEach((x) => {
        if (x.name != null && x.name === "pluto-settings.json") {
          hasSettings = true;
        }
      });
    } catch (e) {
      console.info("No Settings Config Found. Starting Build");
    }

    if (!hasSettings) {
      const stngs: PlutoSettings = {
        autoUpdate: true,
        selected_theme: THEME_AVAILABILITY.PLUTO_DARK,
      };

      this.settings = stngs;

      await fs.writeFile("pluto-settings.json", JSON.stringify(stngs), {
        dir: BaseDirectory.Config,
      });
    } else {
      await this.load_settings();
    }

    const tm = new ThemeManager({ theme_id: THEME_AVAILABILITY.PLUTO_DARK });

    this.Theme = tm;
  }

  async load_settings() {}

  async save_settings() {}

  async load_version() {
    const ver: AppVersion = JSON.parse(
      await fs.readTextFile("version.json", {
        dir: BaseDirectory.Resource,
      })
    );

    this.version = Object.assign<AppVersion, AppVersion>(
      {
        gitBranch: ver.gitBranch,
        version: ver.version,
        gitCommitHash: ver.gitCommitHash,
      },
      ver
    );
  }
}
