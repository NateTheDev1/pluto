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
      className="h-[35px] flex justify-between"
      style={plutoState?.Theme.getClassName("title-bar")}
    >
      <div className="left"></div>
      <div className="middle"></div>
      <div className="right flex">
        <div
          id="titlebar-minimize"
          className="p-4 w-12 flex items-center justify-center h-full hover:bg-[#7e57c2] transition-all"
          style={plutoState?.Theme.getClassName("title-bar-button")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.9em"
            height="0.9em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
            style={plutoState?.Theme.getClassName("title-bar-icon")}
          >
            <path
              style={plutoState?.Theme.getClassName("title-bar-icon")}
              d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
            />
          </svg>
        </div>
        <div
          id="titlebar-maximize"
          className="p-4 w-12 flex items-center justify-center h-full hover:bg-[#7e57c2] transition-all"
          style={plutoState?.Theme.getClassName("title-bar-button")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.9em"
            height="0.9em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={plutoState?.Theme.getClassName("title-bar-icon")}
          >
            <path
              style={plutoState?.Theme.getClassName("title-bar-icon")}
              d="M5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3Zm0 1.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H5.75Z"
            />
          </svg>
        </div>
        <div
          className="p-4 w-12 flex items-center justify-center h-full hover:bg-red-600 transition-all"
          id="titlebar-close"
          style={plutoState?.Theme.getClassName("title-bar-button")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.1em"
            height="1.1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
          >
            <path
              fill="white"
              d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z"
              className="clr-i-outline clr-i-outline-path-1"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
