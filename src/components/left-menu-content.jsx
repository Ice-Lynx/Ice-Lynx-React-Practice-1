import "../styles/left-menu-content.css";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

export const screens = [
  {
    title: "Lynx Titan",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Hey Jase",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "ShawnBay",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "senZe",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Tomdabom",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Karma",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Harmony",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "DedWilson",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "GodTermentor",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Vinny",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "borsi",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Brundeen",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Eeli",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Oslo the pooper",
    color: "rgba(233,46,159,1)",
  },
  {
    title: "Aziz",
    color: "rgba(233,46,159,1)",
  },
];

export function LeftMenuContent() {
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
              <motion.div layoutId="menu-arrow" class="menu-arrow" />
            )}
            {title}
          </motion.li>
        ))}
      </div>
    </AnimateSharedLayout>
  );
}
