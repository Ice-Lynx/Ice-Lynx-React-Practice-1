import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

export const screens = [
  {
    title: "Zezima",
    color: "#ffffff",
  },
  {
    title: "Duriel321",
    color: "#ffffff",
  },
  {
    title: "CowKiller1337",
    color: "#ffffff",
  },
  {
    title: "Exam",
    color: "#ffffff",
  },
  {
    title: "ElveMage",
    color: "#ffffff",
  },
];

export function TopMenu() {
  const [selected, setSelected] = useState(0);

  return (
    <AnimateSharedLayout>
      <ol style={{ transform: "translateZ(0)" }}>
        {screens.map(({ title, color }, i) => (
          <motion.li
            animate
            key={i}
            className={`title ${i === selected && "selected"}`}
            style={{ color: i === selected ? color : "#ffff" }}
            onHoverStart={() => setSelected(i)}
          >
            {i === selected && (
              <motion.div
                layoutId="underline"
                className="underline"
              />
            )}
            {i === selected && (
              <motion.div
                layoutId="overline"
                className="overline"
              />
            )}
            {title}
          </motion.li>
        ))}
      </ol>
    </AnimateSharedLayout>
  );
}
