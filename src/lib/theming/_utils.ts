import { fs } from "@tauri-apps/api";
import { ThemeElement, ThemeManagerConfig } from "./Theme.types";

export const theme_reader = async (
  config: ThemeManagerConfig
): Promise<Record<string, ThemeElement>> => {
  return {};
};
