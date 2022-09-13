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
