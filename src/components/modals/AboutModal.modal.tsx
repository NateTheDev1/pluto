import Modal from "react-modal";
import { PlutoLibContext } from "../../state/PlutoLib.state";
// @ts-ignore
import Style from "style-it";

import Logo from "../../assets/pluto-logo-full.svg";
import { genericModalStyle } from "../../constants/modal.config";

export const AboutModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <PlutoLibContext.Consumer>
      {(plutoLib) => (
        <Modal isOpen={true} onRequestClose={onClose} style={genericModalStyle}>
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
              className="animate-fade"
            >
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
              <div className="p-8">
                <img src={Logo} className="w-3/6 m-auto" />
                <h2 className="text-2xl font-bold my-4">About</h2>
                <p className="my-4 leading-loose">
                  Pluto is a lightweight code editor focused on being a
                  batteries included editor. Built with Rust for MacOs, Windows,
                  and Linux. Follow us on Twitter or Github to stay on top of
                  app updates.
                </p>
                <div className="mt-8">
                  <p className="font-light leading-8 opacity-70">
                    Version:{" "}
                    {(plutoLib?.version?.version + "-" ?? "VUNKNK-") +
                      plutoLib?.version.gitCommitHash ?? "UNSTABLE"}
                  </p>
                  <div className="flex flex-col mt-4">
                    <a
                      href="#"
                      className="my-2"
                      style={plutoLib.Theme.getClassName("modal.link")}
                    >
                      Website
                    </a>
                    <a
                      href="#"
                      className="my-2"
                      style={plutoLib.Theme.getClassName("modal.link")}
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="my-2"
                      style={plutoLib.Theme.getClassName("modal.link")}
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="my-2"
                      style={plutoLib.Theme.getClassName("modal.link")}
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Style>
        </Modal>
      )}
    </PlutoLibContext.Consumer>
  );
};
