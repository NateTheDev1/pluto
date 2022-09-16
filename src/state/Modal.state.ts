import { atom } from "recoil";

export const CurrentModalState = atom<string | null>({
  key: "titlebar.current-modal",
  default: null,
});

export const CurrentSettingState = atom<string>({
  key: "modal.settings.current-tab",
  default: "Appearance",
});
