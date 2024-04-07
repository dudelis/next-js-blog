"use client"
import { createContext, useEffect, useState } from "react";

export interface IThemeContext {
  theme: string;
  toggle: () => void;
};

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = window.localStorage.getItem("theme");
    return value || "light";
  }
}

export const ThemeContext = createContext<IThemeContext | null>(null);
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>((): string => {
    return getFromLocalStorage() || "light";
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggle }} > {children} </ThemeContext.Provider>
}