"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Direction = "up" | "down" | "left" | "right";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: PropsWithChildren<{ delay?: number; direction?: Direction }>) {
  const variants: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...variants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
