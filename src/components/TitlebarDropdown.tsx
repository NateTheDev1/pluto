import { useRecoilState } from "recoil";
import { PlutoLibContext } from "../state/PlutoLib.state";
import { HoveredTitlebarTabState } from "../state/Titlebar.state";
// @ts-ignore
import Style from "style-it";
import { DropdownButtonConfigItem } from "../constants/pluto-titlebar.config";

export const TitlebarDropdown = ({
  title,
  config,
}: {
  title: string;
  config: Record<string, DropdownButtonConfigItem>;
}) => {
  const [hoveredState, setHoveredState] = useRecoilState(
    HoveredTitlebarTabState
  );

  return (
    <PlutoLibContext.Consumer>
      {(plutoLib) => (
        <Style>
          {`
            #titlebar-dropdown-header:hover {
              background: ${
                plutoLib?.Theme.getHoverClassName("titlebar.dropdown.header")[
                  "background"
                ]
              };
            }

            #titlebar-dropdown-item:hover {
              background: ${
                plutoLib?.Theme.getHoverClassName("titlebar.dropdown.item")[
                  "background"
                ]
              };
            }
          `}
          <div
            style={plutoLib?.Theme.getClassName("titlebar.dropdown.header")}
            onMouseOver={() => setHoveredState(title)}
            onMouseLeave={() => hoveredState === title && setHoveredState(null)}
            id="titlebar-dropdown-header"
            className="h-full px-2 transition-all mx-1 rounded-md flex items-center"
          >
            <p
              style={plutoLib.Theme.getClassName(
                "titlebar.dropdown.header.text"
              )}
            >
              {title}
            </p>
            {hoveredState === title && (
              <div
                className="w-96 top-9 absolute rounded-lg"
                style={plutoLib.Theme.getClassName("titlebar.dropdown")}
              >
                {Object.entries(config).map(([k, val], key) => (
                  <div
                    id="titlebar-dropdown-item"
                    style={plutoLib.Theme.getClassName(
                      "titlebar.dropdown.item"
                    )}
                    key={key}
                    className="p-4 flex items-center justify-between text-sm hover:opacity-30 transition-all cursor-pointer"
                  >
                    <p
                      style={plutoLib.Theme.getClassName(
                        "titlebar.dropdown.item.text"
                      )}
                    >
                      {val.label}
                    </p>
                    <p
                      className="opacity-50"
                      style={plutoLib.Theme.getClassName(
                        "titlebar.dropdown.item.text"
                      )}
                    >
                      {val.shortcut}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Style>
      )}
    </PlutoLibContext.Consumer>
  );
};
