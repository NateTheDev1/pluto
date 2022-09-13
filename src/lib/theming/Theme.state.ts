import { LibModuleState, ModuleStatus } from "./types/generic";

interface ThemeState extends LibModuleState {}

export const theme_state: ThemeState = {
  module_id: "modules/theme",
  status: ModuleStatus.OFF,
};
