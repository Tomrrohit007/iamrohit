"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const getTheme = localStorage.getItem("theme");
const currentTheme = getTheme === "true";

const Darkmode = () => {
  const [mode, setMode] = useState(currentTheme || false);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.checked);
    localStorage.setItem("theme", JSON.stringify(e.target.checked));
  };

  useEffect(() => {
    document.documentElement.className = mode ? "dark" : "";
  }, [mode]);

  return (
    <label
      className="toggle-btn"
      htmlFor="toggle"
      style={{ backgroundColor: mode ? "#155f3a" : "#333" }}
    >
      <div className="icon">🌙</div>
      <div className="icon">🔆</div>
      <m.div
        initial={false} // Important to set initial to false to enable animations
        animate={{
          x: mode ? 18 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{ backgroundColor: mode ? "#53c28b" : "#bbb" }}
        className="ball"
      />
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle"
        onChange={handleToggle}
        checked={mode}
      />
    </label>
  );
};

export default Darkmode;
