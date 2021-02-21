import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

export const screens = [
  {
    title: "Zezima",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Duriel321",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "CowKiller1337",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Exam",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "ElveMage",
    color: "rgba(233,46,159,1)",
  },
];

export function TopMenu() {
  const [selected, setSelected] = useState(0);

  return (
    <AnimateSharedLayout>
      <div style={{ transform: "translateZ(0)" }}>
        {screens.map(({ title, color }, i) => (
          <motion.li
            animate
            key={i}
            className={`title ${i === selected && "selected"}`}
            style={{ color: i === selected ? color : "rgba(0,0,0,0.7)" }}
            onHoverStart={() => setSelected(i)}
          >
            {i === selected && (
              <motion.div layoutId="sideline" className="sideline" />
            )}
            {i === selected && (
              <motion.div layoutId="underline" className="underline" />
            )}

            {title}
          </motion.li>
        ))}
      </div>
    </AnimateSharedLayout>
  );
}
