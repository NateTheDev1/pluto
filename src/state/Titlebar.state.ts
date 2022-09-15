import { atom } from "recoil";

export const HoveredTitlebarTabState = atom<string | null>({
  key: "titlebar.hovered-tab",
  default: null,
});
