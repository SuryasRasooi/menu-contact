import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

const MediaProvider = ({ children }) => {
  const [mediaWidth, setMediaWidth] = useState(null);

  useEffect(() => {
    setMediaWidth(Math.min(Math.round(window.innerWidth / 100) * 100, 1440));
    window.addEventListener("resize", () => {
      setMediaWidth(Math.min(Math.round(window.innerWidth / 100) * 100, 1440));
    });
  }, []);

  return <Context.Provider value={{ mediaWidth }}>{children}</Context.Provider>;
};

export default MediaProvider;
