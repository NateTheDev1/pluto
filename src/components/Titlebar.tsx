import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { PlutoLibState } from "../state/PlutoLib.state";

export const Titlebar = () => {
  const [plutoState, setPlutoState] = useRecoilState(PlutoLibState);

  useEffect(() => {
    document
      .getElementById("titlebar-minimize")
      ?.addEventListener("click", () => appWindow.minimize());
    document
      .getElementById("titlebar-maximize")
      ?.addEventListener("click", () => appWindow.toggleMaximize());
    document
      .getElementById("titlebar-close")
      ?.addEventListener("click", () => appWindow.close());
  }, []);

  return (
    <div
      data-tauri-drag-region
      className="h-[38px] flex items-center justify-between"
      style={plutoState?.Theme.getClassName("title-bar")}
    >
      <div className="left"></div>
      <div className="middle"></div>
      <div className="right flex">
        <div className="px-2 bg-white" id="titlebar-minimize">
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </div>
        <div className="px-2 bg-white" id="titlebar-maximize">
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </div>
        <div className="px-2 bg-white" id="titlebar-close">
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>
    </div>
  );
};
