import React, { useState } from "react";
import { Menubtn } from "./menu-btn.jsx";
import { TopMenu } from "./top-bar-menu.jsx";

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
      {isOpened && <TopMenu/>}
    </div>
  );
}
