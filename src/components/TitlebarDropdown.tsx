import { useRecoilState } from "recoil";
import { PlutoLibContext } from "../state/PlutoLib.state";
import { HoveredTitlebarTabState } from "../state/Titlebar.state";

export const TitlebarDropdown = ({
  title,
  config,
}: {
  title: string;
  config: Record<string, string>;
}) => {
  const [hoveredState, setHoveredState] = useRecoilState(
    HoveredTitlebarTabState
  );

  return (
    <PlutoLibContext.Consumer>
      {(plutoLib) => (
        <div
          onMouseOver={() => setHoveredState(title)}
          onMouseLeave={() => hoveredState === title && setHoveredState(null)}
          className="h-full px-2 transition-all hover:bg-[#FE9833] mx-1 rounded-md flex items-center"
        >
          <p style={plutoLib?.Theme.getClassName("titlebar.dropdown.header")}>
            {title}
          </p>
          {hoveredState === title && (
            <div className="bg-[#393939] w-96 top-9 absolute rounded-lg">
              {Object.entries(config).map(([k, val], key) => (
                <div className="p-4 hover:opacity-30 transition-all cursor-pointer hover:bg-[#202120]">
                  <p key={key} className="w-full text-white">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </PlutoLibContext.Consumer>
  );
};
