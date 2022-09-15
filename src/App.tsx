import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Titlebar } from "./components/Titlebar";
import { PlutoLib, pluto_lib } from "./lib/PlutoLib";
import { PlutoLibState } from "./state/PlutoLib.state";

function App() {
  const [plutoState, setPlutoState] = useRecoilState(PlutoLibState);

  useEffect(() => {
    if (!plutoState) {
      setPlutoState(pluto_lib);
    }
  }, []);

  return (
    <div
      className="app-root h-screen w-screen"
      style={plutoState?.Theme.getClassName("window-body")}
    >
      <Titlebar />
    </div>
  );
}

export default App;
