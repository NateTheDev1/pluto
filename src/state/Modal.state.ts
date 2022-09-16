import { atom } from "recoil";

export const CurrentModalState = atom<string | null>({
  key: "titlebar.current-modal",
  default: null,
});
