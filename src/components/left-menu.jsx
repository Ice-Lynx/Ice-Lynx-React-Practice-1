import React, { useState } from "react";
import { Menubtn } from "./menu-btn.jsx";

export function ToggleBox({ title, children }) {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="left-menu">
      <div className="menudiv" onClick={toggle}>
        <Menubtn />
      </div>
      {isOpened && <p>I123542313123</p>}
      {isOpened && <p>123154124123123</p>}
    </div>
  );
}
