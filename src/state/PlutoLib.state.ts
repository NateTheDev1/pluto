import React from "react";
import { PlutoLib } from "../lib/PlutoLib";
import EventEmitter from "eventemitter3";

type PlutoUpdatePayload = {};

const eventEmitter = new EventEmitter();

const PlutoUpdateEmitter = {
  on: (event: string, fn: (data: PlutoUpdatePayload) => void) =>
    eventEmitter.on(event, fn),
  once: (event: string, fn: (data: PlutoUpdatePayload) => void) =>
    eventEmitter.once(event, fn),
  off: (event: string, fn: (data: PlutoUpdatePayload) => void) =>
    eventEmitter.off(event, fn),
  emit: (event: string, payload: PlutoUpdatePayload) =>
    eventEmitter.emit(event, payload),
};

Object.freeze(PlutoUpdateEmitter);

export { PlutoUpdateEmitter };

export const PlutoLibContext = React.createContext(new PlutoLib());
