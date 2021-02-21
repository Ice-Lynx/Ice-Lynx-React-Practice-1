import { motion } from "framer-motion";
import { useState } from "react";

export function MenuBtn() {
  const [isChecked, setIsChecked] = useState(true);
  const [rotation, setRotation] = useState(0);

  return (
    <motion.div
      style={{
        width: 50,
        height: 35,
        borderRadius: 0,
        margin: 0,
      }}
      animate={{ rotate: rotation }}
      onClick={() => setIsChecked(!isChecked) & setRotation(rotation + 180)}
    >
      <svg width="100" height="100" scale="1">
        <path d="m 5 5 l 40 0 l 0 5 l -40 0" fill="rgba(233,46,159,1)" />
        <path d="m 5 15 l 40 0 l 0 5 l -40 0" fill="rgba(253,92,98,1)" />
        <path d="m 5 25 l 40 0 l 0 5 l -40 0" fill="rgba(251,158,49,1)" />
      </svg>
    </motion.div>
  );
}
