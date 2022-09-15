import { Titlebar } from "./components/Titlebar";
import { PlutoLibContext } from "./state/PlutoLib.state";

const App = () => {
  return (
    <PlutoLibContext.Consumer>
      {(plutoLib) => (
        <div
          className="app-root h-screen w-screen"
          style={plutoLib?.Theme.getClassName("window-body")}
        >
          <Titlebar />
        </div>
      )}
    </PlutoLibContext.Consumer>
  );
};

export default App;
