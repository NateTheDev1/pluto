import { useContext } from "react";
import { PlutoLibContext } from "../state/PlutoLib.state";

export const NavButtonBar = () => {
  const plutoLib = useContext(PlutoLibContext);

  return (
    <div
      className="flex flex-col min-w-[6vw] h-full"
      style={plutoLib.Theme.getClassName("nav-button-bar")}
    >
      <div
        className="mb-2 cursor-pointer hover:opacity-100 opacity-60 min-w-full h-16 flex items-center justify-center"
        style={plutoLib.Theme.getClassName("nav-button-bar-container")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          className="w-10 h-10"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 21 21"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 14.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" />
            <path d="M3.5 4.5v10a4 4 0 0 0 4 4h8m-3-16v3a2 2 0 0 0 2 2h3" />
          </g>
        </svg>
      </div>
    </div>
  );
};
