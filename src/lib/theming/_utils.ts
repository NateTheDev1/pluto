import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";
import {
  FSThemeJSON,
  ThemeElement,
  ThemeManagerConfig,
  THEME_AVAILABILITY,
} from "./Theme.types";

export const theme_reader = async (
  config: ThemeManagerConfig
): Promise<ThemeElement[]> => {
  const filePath = `themes/[${THEME_AVAILABILITY[config.theme_id]}].json`;
  console.info("Attempting Load From " + filePath);

  let data!: FSThemeJSON;

  try {
    const raw = await fs.readTextFile(filePath, {
      dir: BaseDirectory.Resource,
    });

    const fsThemeData: FSThemeJSON = JSON.parse(raw);

    if (fsThemeData) {
      data = fsThemeData;
    }
  } catch (e) {
    console.error(e);
    throw new Error("Error Loading Theme From Path: " + filePath);
  }

  if (!data) {
    return [];
  } else {
    return data.elements;
  }
};
