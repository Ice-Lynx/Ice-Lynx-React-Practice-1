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
      {isOpened && <div className="menuContent">Menu item 1</div>}
      {isOpened && <div className="menuContent">Menu item 2</div>}
      {isOpened && <div className="menuContent">Menu item 3</div>}
    </div>
  );
}
