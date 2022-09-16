import { atom } from "recoil";
import EventEmitter from "eventemitter3";

type DropdownClickedPayload = {
  dropdownKey: string;
};

export const HoveredTitlebarTabState = atom<string | null>({
  key: "titlebar.hovered-tab",
  default: null,
});

const eventEmitter = new EventEmitter();

const ClickedDropdownItemEmitter = {
  on: (event: string, fn: (data: DropdownClickedPayload) => void) =>
    eventEmitter.on(event, fn),
  once: (event: string, fn: (data: DropdownClickedPayload) => void) =>
    eventEmitter.once(event, fn),
  off: (event: string, fn: (data: DropdownClickedPayload) => void) =>
    eventEmitter.off(event, fn),
  emit: (event: string, payload: DropdownClickedPayload) =>
    eventEmitter.emit(event, payload),
};

Object.freeze(ClickedDropdownItemEmitter);

export { ClickedDropdownItemEmitter };
