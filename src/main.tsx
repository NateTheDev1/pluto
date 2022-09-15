import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";

import "./styles/fonts.css";
import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
