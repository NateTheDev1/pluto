import Modal from "react-modal";
import { PlutoLibContext } from "../../state/PlutoLib.state";
// @ts-ignore
import Style from "style-it";
import { genericModalStyle } from "../../constants/modal.config";
import { settingsMenuConfig } from "../../constants/settings-menu.config";
import { useRecoilState } from "recoil";
import { CurrentSettingState } from "../../state/Modal.state";
import { AppearanceSettings } from "../settings/AppearanceSettings";

export const SettingsModal = ({ onClose }: { onClose: () => void }) => {
  const [currentTab, setCurrentTab] = useRecoilState(CurrentSettingState);

  return (
    <PlutoLibContext.Consumer>
      {(plutoLib) => (
        <Modal
          isOpen={true}
          style={{
            ...genericModalStyle,
            content: {
              ...genericModalStyle.content,
              width: "80vw",
              maxWidth: "1400px",
              height: "80vh",
            },
          }}
        >
          <Style>
            {`
                    #modal-icons-icon:hover {
                      opacity: ${
                        plutoLib.Theme.getHoverClassName("modal.icons.icon")[
                          "opacity"
                        ]
                      }
                    }
                `}
            <div
              style={plutoLib?.Theme.getClassName("modal")}
              className="animate-fade h-full w-full flex"
            >
              <div
                className="w-1/4 h-full p-8"
                style={plutoLib.Theme.getClassName("modal.settings.left")}
              >
                <h2 className="text-2xl px-2">Settings</h2>
                <div className="mt-8 flex flex-col">
                  {settingsMenuConfig.tabs.map((tab, key: number) => (
                    <button
                      onClick={() => setCurrentTab(tab.title)}
                      key={key}
                      className="flex items-center px-2 my-2 rounded-lg transition-all"
                      style={{
                        background:
                          tab.title === currentTab
                            ? plutoLib.Theme.getHoverClassName(
                                "modal.settings.tab"
                              )["background"]
                            : "",
                      }}
                    >
                      {tab.icon({
                        fill: plutoLib.Theme.getClassName("modal")["color"],
                        width: "30px",
                        height: "30px",
                        opacity: tab.title === currentTab ? "1" : "0.5",
                      })}
                      <p
                        className="py-4 ml-4"
                        style={{
                          opacity: tab.title === currentTab ? "1" : "0.5",
                        }}
                      >
                        {tab.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div
                  className="px-4 pt-4 flex items-center justify-end"
                  id="close-icon"
                  onClick={onClose}
                >
                  <svg
                    className="cursor-pointer transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 36 36"
                    id="modal-icons-icon"
                    style={plutoLib?.Theme.getClassName("modal.icons.icon")}
                  >
                    <path
                      style={plutoLib?.Theme.getClassName("modal.icons.icon")}
                      d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </div>
                {currentTab === "Appearance" ? <AppearanceSettings /> : <></>}
              </div>
            </div>
          </Style>
        </Modal>
      )}
    </PlutoLibContext.Consumer>
  );
};
