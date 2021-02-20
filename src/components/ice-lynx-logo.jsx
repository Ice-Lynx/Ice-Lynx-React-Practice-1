import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function IceLynxLogo() {
  const boxVariants = {
    checked: { scale: 1, background: "rgba(0,100,255,0)" },
    unchecked: { scale: 1, background: "rgba(0,100,255,0)" },
  };

  const checkVariants = {
    checked: { pathLength: 0 },
    unchecked: { pathLength: 1 },
  };

  const [isChecked, setIsChecked] = React.useState(true);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      class="logo"
      style={{
        width: 90,
        height: 115,
        borderRadius: 0,
        padding: 0,
        backgroundColor: "rgba(0,100,255,0)",
      }}
      variants={boxVariants}
      animate={isChecked ? "checked" : "unchecked"}
      transition={{ duration: 0.1, type: "tween" }}
      onHoverStart={() => setIsChecked(!isChecked)}
      onHoverEnd={() => setIsChecked(!isChecked)}
    >
      <svg width="90" height="115">
        <path d="M 25 60 l 5 0 l 10 10 l -5 0 l -10 -5" fill="#b4eafa" />
        <path d="M 65 60 l -5 0 l -10 10 l 5 0 l 10 -5" fill="#b4eafa" />
        <path d="M 45 80 l 5 5 l -2.5 5 l -5 0 l -2.5 -5" fill="#b4eafa" />
        <path
          d="M 45 40 l -15 -5 l -15 -15 l -5 -15 l -5 -5 l 5 15 l -5 15 l 10 15 l -10 15 l -5 20 l 10 -5 l 10 40 l 5 -25 l 5 -5 l 10 10 l 10 0 l 10 -10 l 5 5 l 5 25 l 10 -40 l 10 5 l -5 -20 l -10 -15 l 10 -15 l -5 -15 l 5 -15 l -5 5 l -5 15 l -15 15 l -15 5"
          fill="rgba(0,0,0,0.2)"
        />
        <svg width="90" height="115" scale="1">
          <motion.path
            d="m 5 0 l 5 5 l 5 15 l 15 15 l 15 5"
            fill="transparent"
            strokeWidth="1"
            stroke="#b4eafa"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="m 85 0 l -5 5 l -5 15 l -15 15 l -15 5"
            fill="transparent"
            strokeWidth="1"
            stroke="#b4eafa"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="M 5 0 l 5 15 l -5 15 l 10 15 l -10 15 l -5 20 l 10 -5 l 10 40 l 5 -25 l 5 -5"
            fill="transparent"
            strokeWidth="1"
            stroke="#b4eafa"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="M 85 0 l -5 15 l 5 15 l -10 15 l 10 15 l 5 20 l -10 -5 l -10 40 l -5 -25 l -5 -5"
            fill="transparent"
            strokeWidth="1"
            stroke="#b4eafa"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="M 30 85 l 10 10 l 5 0"
            fill="transparent"
            strokeWidth="1"
            stroke="#b4eafa"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="M 60 85 l -10 10 l -5 0"
            fill="transparent"
            strokeWidth="1"
            stroke="#b4eafa"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
        </svg>
      </svg>
    </motion.div>
  );
}
