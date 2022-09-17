import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";
import { THEME_AVAILABILITY } from "./theming/Theme.types";
import { ThemeManager } from "./theming/ThemeManager";
import { AppVersion, PlutoSettings } from "./types/generic";
import { Store } from "tauri-plugin-store-api";

export class PlutoLib {
  store!: Store;
  settings?: PlutoSettings;
  version!: AppVersion;
  Theme!: ThemeManager;

  constructor() {
    this.store = new Store(".pluto_settings.json");

    console.info("User Settings Store: " + this.store.path);
  }

  async init() {
    await this.store.save();
    await this.load_version();
    await this.settings_check();

    const tm = new ThemeManager();

    await tm.init({ theme_id: this.settings?.selected_theme! });

    this.Theme = tm;
  }

  async settings_check() {
    let hasSettings = await this.store.get("settings");

    if (!hasSettings) {
      console.info("No Settings Config Found. Starting Build");

      const stngs: PlutoSettings = {
        autoUpdate: true,
        selected_theme: THEME_AVAILABILITY.PLUTO_DARK,
      };

      this.settings = stngs;

      await this.store.set("settings", JSON.stringify(stngs));
    } else {
      await this.load_settings();
    }
  }

  async load_settings() {
    const setting = await this.store.get("settings");

    this.settings = JSON.parse(setting as unknown as string);
  }

  async reset_settings() {
    await this.store.reset();

    this.settings_check();
  }

  async save_settings() {
    await this.store.set("settings", JSON.stringify(this.settings));

    await this.store.save();

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
