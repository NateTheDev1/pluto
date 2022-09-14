import { LibModuleState, ModuleStatus } from "../types/generic";

export interface ThemeState extends LibModuleState {}

export const default_theme_state: ThemeState = {
  module_id: "modules/theme",
  status: ModuleStatus.OFF,
};
