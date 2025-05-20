"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { themes, defaultTheme } from "@/lib/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState(defaultTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("themeColor") || defaultTheme;
    const savedMode = localStorage.getItem("darkMode");
    
    // Set initial theme from saved preferences
    setThemeColor(savedTheme);
    
    // Check system preference for dark mode if no saved preference
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    // Save preferences
    localStorage.setItem("themeColor", themeColor);
    localStorage.setItem("darkMode", isDarkMode.toString());
    
    // Apply dark mode class
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Apply theme color variables
    const theme = themes.find((t) => t.id === themeColor) || themes[0];
    
    // Set CSS variables for light and dark themes
    document.documentElement.style.setProperty("--theme-hue", theme.hue);
    
    // Update all CSS variables based on the theme
    applyThemeProperties(theme, isDarkMode);
  }, [themeColor, isDarkMode]);

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Change theme color
  const changeTheme = (themeId) => {
    if (themes.some((t) => t.id === themeId)) {
      setThemeColor(themeId);
    }
  };

  // Apply CSS custom properties based on theme
  const applyThemeProperties = (theme, isDark) => {
    // Get the appropriate hue based on mode
    const hue = isDark ? theme.darkPrimaryHue : theme.lightPrimaryHue;
    
    // Common values
    const root = document.documentElement;
    
    if (isDark) {
      // Dark theme properties
      root.style.setProperty("--primary", `${hue} 84% 40%`);
      root.style.setProperty("--accent", `${hue} 84% 12%`);
      root.style.setProperty("--accent-foreground", `${hue} 84% 60%`);
    } else {
      // Light theme properties
      root.style.setProperty("--primary", `${hue} 70% 40%`);
      root.style.setProperty("--muted", `${hue} 10% 96%`);
      root.style.setProperty("--muted-foreground", `${hue} 5% 45%`);
      root.style.setProperty("--accent", `${hue} 30% 90%`);
      root.style.setProperty("--accent-foreground", `${hue} 70% 25%`);
      root.style.setProperty("--border", `${hue} 10% 90%`);
      root.style.setProperty("--input", `${hue} 10% 90%`);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        themeColor,
        changeTheme,
        availableThemes: themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}; 