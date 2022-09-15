export type DropdownButtonConfigItem = {
  label: string;
  shortcut?: string;
};

export enum TitlebarHeaders {
  File,
  Edit,
  View,
  Git,
  Terminal,
  Help,
}

export const pluto_titlebar_config: Record<
  TitlebarHeaders,
  Record<string, DropdownButtonConfigItem>
> = {
  [TitlebarHeaders.File]: {
    "file.new": { label: "New File", shortcut: "Ctrl+N" },
    "file.new-window": {
      label: "New Window",
      shortcut: "Ctrl+Shift+N",
    },
  },
  [TitlebarHeaders.Edit]: {
    "edit.undo": { label: "Undo", shortcut: "Ctrl+Z" },
    "edit.redo": { label: "Redo", shortcut: "Ctrl+Y" },
  },
  [TitlebarHeaders.View]: {},
  [TitlebarHeaders.Git]: {},
  [TitlebarHeaders.Terminal]: {},
  [TitlebarHeaders.Help]: {
    "help.getting-started": { label: "Get Started" },
    "help.support": { label: "Support" },
    "help.about": { label: "About" },
  },
};
