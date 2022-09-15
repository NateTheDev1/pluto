import { THEME_AVAILABILITY } from "../theming/Theme.types";

export interface LibModuleState {
  module_id: string;
  status: ModuleStatus;
}

export enum ModuleStatus {
  OFF,
  INITIALIZING,
  FAILED,
  RUNNING,
  STOPPED,
  COMPLETED,
}

export type AppVersion = {
  gitBranch: string;
  gitCommitHash: string;
  version: string;
};

export type PlutoSettings = {
  selected_theme: THEME_AVAILABILITY;
  autoUpdate: boolean;
};
