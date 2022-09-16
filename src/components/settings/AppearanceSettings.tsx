import { useContext, useEffect, useState } from "react";
import { PlutoLib } from "../../lib/PlutoLib";
import { THEME_AVAILABILITY } from "../../lib/theming/Theme.types";
import { ThemeManager } from "../../lib/theming/ThemeManager";
import {
  PlutoLibContext,
  PlutoUpdateEmitter,
} from "../../state/PlutoLib.state";

const StringIsNumber = (value: any) => isNaN(Number(value)) === false;

export const AppearanceSettings = () => {
  const plutoLib = useContext(PlutoLibContext);

  const to_array = (enumme: any) => {
    return Object.keys(enumme)
      .filter(StringIsNumber)
      .map((key) => enumme[key]);
  };

  return (
    <div className="p-12">
      <h2 className="text-2xl">Appearance</h2>
      <p className="leading-loose my-4">
        This changes how awesome Pluto looks in your eyes.
      </p>
      <div className="flex flex-col">
        <label className="my-4 opacity-50 font-medium">Theme</label>
        <select
          onChange={(e) => {
            if (plutoLib.settings) {
              plutoLib.settings.selected_theme = THEME_AVAILABILITY[
                e.target.value as any
              ] as any;
              plutoLib.save_settings().then(() => {
                plutoLib.init().then(() => {
                  PlutoUpdateEmitter.emit("UPDATED", {});
                });
              });
            }
          }}
          value={THEME_AVAILABILITY[
            plutoLib.settings?.selected_theme!
          ].toString()}
          style={plutoLib.Theme.getClassName("modal.settings.theme-select")}
          className="text-sm rounded-lg block w-full p-3 border-none outline-none"
        >
          {to_array(THEME_AVAILABILITY).map((x: string, key: number) => (
            <option key={key} value={x}>
              {x.split("_")[0]} {x.split("_")[1]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
