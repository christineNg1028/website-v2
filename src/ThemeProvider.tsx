import React, { createContext, useState, useEffect, useContext } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if window is defined (i.e., if we're in the browser)
    if (typeof window !== "undefined") {
      // Check for saved user preference, if any
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
      // If no saved preference, use system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    // Default to false if not in browser
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setDarkMode(mediaQuery.matches);
    };

    // Add listener for changes in system color scheme
    mediaQuery.addListener(handleChange);

    // Clean up listener
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    // Save user preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
