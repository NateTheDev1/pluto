import { Titlebar } from "./components/Titlebar";
import { PlutoLibContext, PlutoUpdateEmitter } from "./state/PlutoLib.state";
import Modal from "react-modal";
import { ModalProvider } from "./components/modals/ModalProvider";
import { useContext, useEffect, useState } from "react";
import { PlutoLib } from "./lib/PlutoLib";
import { NavButtonBar } from "./components/NavButtonBar";

Modal.setAppElement("#root");

const App = () => {
  const [plutoLib, setPlutoLib] = useState<PlutoLib>();

  useEffect(() => {
    PlutoUpdateEmitter.on("UPDATED", (data) => {
      init();
    });

    if (!plutoLib) {
      init();
    }
  }, []);

  const init = async () => {
    const lib = new PlutoLib();

    await lib.init();

    setPlutoLib(lib);
  };

  return (
    <PlutoLibContext.Provider value={plutoLib!}>
      {plutoLib?.version && (
        <>
          <div
            className="app-root h-screen w-screen"
            style={plutoLib?.Theme.getClassName("window-body")}
          >
            <Titlebar />
            <div className="flex w-full h-full">
              <NavButtonBar />
            </div>
          </div>
          <ModalProvider />
        </>
      )}
    </PlutoLibContext.Provider>
  );
};

export default App;
