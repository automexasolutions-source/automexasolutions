import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const over = () => setHovered(true);
    const out = () => setHovered(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
        el.addEventListener("mouseenter", over);
        el.addEventListener("mouseleave", out);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        animate={{
          x: pos.x - (hovered ? 24 : 10),
          y: pos.y - (hovered ? 24 : 10),
          width: hovered ? 48 : 20,
          height: hovered ? 48 : 20,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          background: "radial-gradient(circle, hsl(190 100% 50% / 0.8), hsl(270 80% 60% / 0.4))",
          boxShadow: hovered
            ? "0 0 30px hsl(190 100% 50% / 0.5), 0 0 60px hsl(270 80% 60% / 0.3)"
            : "0 0 15px hsl(190 100% 50% / 0.3)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        style={{
          width: 6,
          height: 6,
          background: "hsl(190 100% 70%)",
          boxShadow: "0 0 10px hsl(190 100% 50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
