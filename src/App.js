import "./App.css";
import { ToggleBox } from "./components/left-menu.jsx";
import { IceLynxLogo } from "./components/ice-lynx-logo.jsx";

function App() {
  return (
    <div class="wrapper">
      <div class="header">Header</div>
      <div class="body">
        <ToggleBox />
        <div class="content">Content goes here.</div>
      </div>
      <div class="footer">
        <IceLynxLogo />
        Ice Lynx © {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default App;
