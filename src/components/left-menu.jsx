import "../styles/left-menu.css";
import React, { useState } from "react";
import { MenuBtn } from "./menu-btn.jsx";
import { LeftMenuContent } from "./left-menu-content.jsx";

export function LeftMenu({ title, children }) {
  const [isOpened, setIsOpened] = useState(false);

  function Toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="left-menu">
      <div className="menudiv" onClick={Toggle}>
        <MenuBtn />
      </div>
      {isOpened && <LeftMenuContent />}
    </div>
  );
}
