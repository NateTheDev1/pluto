import { atom } from "recoil";
import { PlutoLib } from "../lib/PlutoLib";

export const PlutoLibState = atom<PlutoLib | null>({
  key: "pluto_lib_state",
  default: null,
});
