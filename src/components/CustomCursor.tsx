import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [pos, setPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [prevPos, setPrevPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme } = useTheme();
  const trailRef = useRef<CursorPosition[]>([]);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      
      // Update trail positions
      trailRef.current = [
        { x: e.clientX, y: e.clientY },
        ...trailRef.current.slice(0, 8),
      ];
      
      setPrevPos(pos);
      setPos(newPos);
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
  }, [pos]);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const cursorSize = hovered ? 48 : 16;
  const cursorOffset = hovered ? 24 : 8;

  // Calculate velocity for dynamic effects
  const velocity = Math.sqrt(
    Math.pow(pos.x - prevPos.x, 2) + Math.pow(pos.y - prevPos.y, 2)
  );

  return (
    <>
      {/* Main cursor outer glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-normal"
        animate={{
          x: pos.x - cursorOffset,
          y: pos.y - cursorOffset,
          width: cursorSize,
          height: cursorSize,
          opacity: visible ? (isDark ? 0.6 : 0.8) : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 28, 
          mass: 0.5 
        }}
        style={{
          background: isDark 
            ? "radial-gradient(circle, hsl(190 100% 50% / 0.15), hsl(190 100% 50% / 0.02))"
            : "radial-gradient(circle, hsl(190 100% 50% / 0.2), hsl(190 100% 50% / 0.03))",
          boxShadow: hovered
            ? isDark
              ? "0 0 40px hsl(190 100% 50% / 0.3), 0 0 80px hsl(265 80% 55% / 0.15)"
              : "0 0 40px hsl(190 100% 50% / 0.4), 0 0 80px hsl(265 80% 55% / 0.2)"
            : isDark
              ? "0 0 20px hsl(190 100% 50% / 0.15)"
              : "0 0 25px hsl(190 100% 50% / 0.2)",
        }}
      />

      {/* Middle ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: pos.x - cursorOffset + 4,
          y: pos.y - cursorOffset + 4,
          width: cursorSize - 8,
          height: cursorSize - 8,
          opacity: visible ? (isDark ? 0.4 : 0.6) : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25, 
          mass: 0.4 
        }}
        style={{
          border: `2px solid ${isDark ? "hsl(190 100% 60% / 0.5)" : "hsl(190 100% 45% / 0.6)"}`,
        }}
      />

      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: pos.x - (hovered ? 10 : 5),
          y: pos.y - (hovered ? 10 : 5),
          width: hovered ? 20 : 10,
          height: hovered ? 20 : 10,
          opacity: visible ? 1 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 800, 
          damping: 30,
          mass: 0.3
        }}
        style={{
          background: isDark 
            ? "radial-gradient(circle at 30% 30%, hsl(190 100% 80%), hsl(190 100% 50%))"
            : "radial-gradient(circle at 30% 30%, hsl(190 100% 70%), hsl(190 100% 45%))",
          boxShadow: isDark 
            ? "0 0 15px hsl(190 100% 50%), 0 0 30px hsl(190 100% 50% / 0.5)"
            : "0 0 20px hsl(190 100% 45%), 0 0 40px hsl(190 100% 45% / 0.4)",
        }}
      />

      {/* Trailing particles */}
      {trailRef.current.slice(1).map((trailPos, index) => {
        const trailSize = Math.max(4, 12 - index * 1.5);
        const trailOpacity = Math.max(0.05, 0.4 - index * 0.05);
        
        return (
          <motion.div
            key={index}
            className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
            animate={{
              x: trailPos.x - trailSize / 2,
              y: trailPos.y - trailSize / 2,
              width: trailSize,
              height: trailSize,
              opacity: visible ? trailOpacity : 0,
            }}
            transition={{
              duration: 0.1,
              ease: "linear"
            }}
            style={{
              background: isDark
                ? `hsl(190 100% 50% / ${trailOpacity})`
                : `hsl(190 100% 45% / ${trailOpacity * 1.5})`,
              boxShadow: isDark
                ? `0 0 ${trailSize}px hsl(190 100% 50% / ${trailOpacity})`
                : `0 0 ${trailSize}px hsl(190 100% 45% / ${trailOpacity * 1.5})`,
            }}
          />
        );
      })}

      {/* Velocity indicator - shows when moving fast */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        animate={{
          x: pos.x - 2,
          y: pos.y - 2,
          opacity: visible && velocity > 30 ? Math.min(0.3, velocity / 200) : 0,
          scale: Math.min(1.5, 1 + velocity / 100),
        }}
        transition={{ duration: 0.1 }}
        style={{
          width: 4,
          height: 4,
          background: isDark ? "hsl(265 80% 60%)" : "hsl(265 80% 55%)",
          boxShadow: isDark 
            ? "0 0 10px hsl(265 80% 60%)"
            : "0 0 15px hsl(265 80% 55%)",
        }}
      />

      {/* Hover state ring animation */}
      {hovered && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2"
          animate={{
            x: pos.x - cursorOffset - 10,
            y: pos.y - cursorOffset - 10,
            width: cursorSize + 20,
            height: cursorSize + 20,
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            borderColor: isDark 
              ? "hsl(190 100% 50% / 0.3)"
              : "hsl(190 100% 45% / 0.4)",
          }}
        />
      )}

      {/* Click effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: 0, opacity: 0 }}
        style={{
          background: isDark
            ? "radial-gradient(circle, hsl(190 100% 50% / 0.5), transparent)"
            : "radial-gradient(circle, hsl(190 100% 45% / 0.6), transparent)",
        }}
      />
    </>
  );
};

export default CustomCursor;

