import { Titlebar } from "./components/Titlebar";
import { PlutoLibContext } from "./state/PlutoLib.state";
import Modal from "react-modal";
import { ModalProvider } from "./components/modals/ModalProvider";

Modal.setAppElement("#root");

const App = () => {
  return (
    <PlutoLibContext.Consumer>
      {(plutoLib) =>
        !plutoLib.version ? (
          <></>
        ) : (
          <>
            <div
              className="app-root h-screen w-screen"
              style={plutoLib?.Theme.getClassName("window-body")}
            >
              <Titlebar />
            </div>
            <ModalProvider />
          </>
        )
      }
    </PlutoLibContext.Consumer>
  );
};

export default App;
