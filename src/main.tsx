import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";

import "./index.css";
import "./styles/titlebar.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
