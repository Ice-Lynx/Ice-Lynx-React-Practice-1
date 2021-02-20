import "./App.css";
import { ToggleBox} from "./components/left-menu.jsx";

function App() {
  return (
    <div class="wrapper">
      <div class="header">Header
      </div>
      <div class="body">
        <ToggleBox/>
        <div class="content">Content goes here.</div>
      </div>
      <div class="footer">Footer</div>
    </div>
  );
}

export default App;
