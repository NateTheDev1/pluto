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
    <div className="app-root">
      <Titlebar />
      <h1 className="text-3xl">Pluto Editor</h1>
    </div>
  );
}

export default App;
