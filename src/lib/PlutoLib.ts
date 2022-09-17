import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";
import { configDir, resourceDir } from "@tauri-apps/api/path";
import { THEME_AVAILABILITY } from "./theming/Theme.types";
import { ThemeManager } from "./theming/ThemeManager";
import { AppVersion, PlutoSettings } from "./types/generic";
import { forage } from "@tauri-apps/tauri-forage";

export class PlutoLib {
  settings?: PlutoSettings;
  version!: AppVersion;
  Theme!: ThemeManager;

  constructor() {}

  async init() {
    await this.load_version();
    await this.settings_check();

    const tm = new ThemeManager();

    await tm.init({ theme_id: this.settings?.selected_theme! });

    this.Theme = tm;
  }

  async settings_check() {
    let hasSettings = await forage.getItem({ key: "settings" })();

    if (!hasSettings) {
      console.info("No Settings Config Found. Starting Build");

      const stngs: PlutoSettings = {
        autoUpdate: true,
        selected_theme: THEME_AVAILABILITY.PLUTO_DARK,
      };

      this.settings = stngs;

      await forage.setItem({
        key: "settings",
        value: JSON.stringify(stngs),
      });
    } else {
      await this.load_settings();
    }
  }

  async load_settings() {
    const setting = await forage.getItem({ key: "settings" })();

    this.settings = JSON.parse(setting as unknown as string);
  }

  async save_settings() {
    await forage.setItem({
      key: "settings",
      value: JSON.stringify(this.settings),
    })();

    this.settings_check();
  }

  async load_version() {
    const ver: AppVersion = JSON.parse(
      await fs.readTextFile("_up_/resources/version.json", {
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
