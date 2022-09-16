import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";
import { configDir, resourceDir } from "@tauri-apps/api/path";
import { THEME_AVAILABILITY } from "./theming/Theme.types";
import { ThemeManager } from "./theming/ThemeManager";
import { AppVersion, PlutoSettings } from "./types/generic";

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
    let hasSettings = false;

    try {
      const configFiles = await fs.readDir("", {
        dir: BaseDirectory.Resource,
        recursive: false,
      });

      configFiles.forEach((x) => {
        if (x.name != null && x.name === "pluto-settings.json") {
          hasSettings = true;
        }
      });
    } catch (e) {
      console.error(e);
      console.info("No Settings Config Found. Starting Build");
    }

    if (!hasSettings) {
      const stngs: PlutoSettings = {
        autoUpdate: true,
        selected_theme: THEME_AVAILABILITY.PLUTO_DARK,
      };

      this.settings = stngs;

      await fs.writeFile("pluto-settings.json", JSON.stringify(stngs), {
        dir: BaseDirectory.Resource,
      });
    } else {
      await this.load_settings();
    }
  }

  async load_settings() {
    const setting = await fs.readTextFile("pluto-settings.json", {
      dir: BaseDirectory.Resource,
    });

    this.settings = JSON.parse(setting);
  }

  async save_settings() {
    await fs.writeTextFile(
      "pluto-settings.json",
      JSON.stringify(this.settings),
      {
        dir: BaseDirectory.Resource,
      }
    );

    this.settings_check();
  }

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
