"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Palette } from "lucide-react";
import { themes } from "@/lib/themes";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentAccent, setCurrentAccent] = useState("teal");

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Get saved accent from localStorage or use default
    const savedAccent = localStorage.getItem("accentColor") || "teal";
    setCurrentAccent(savedAccent);
    applyAccentColor(savedAccent);
  }, []);

  // Apply the accent color to the CSS variables
  const applyAccentColor = (accentId) => {
    const selectedTheme = themes.find((t) => t.id === accentId) || themes[0];
    const hue = selectedTheme.hue;
    const root = document.documentElement;
    
    // Store the selection in localStorage
    localStorage.setItem("accentColor", accentId);
    
    // Apply the color based on the current theme mode
    const isDark = resolvedTheme === "dark";
    
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

  // Toggle accent color handler
  const changeAccentColor = (accentId) => {
    setCurrentAccent(accentId);
    applyAccentColor(accentId);
  };

  // Update accent color when theme changes
  useEffect(() => {
    if (mounted && currentAccent) {
      applyAccentColor(currentAccent);
    }
  }, [resolvedTheme, mounted, currentAccent]);

  if (!mounted) return null;

  return (
    <div className="fixed z-50 bottom-6 left-6 flex items-center gap-2">
      {/* Accent Color Picker */}
      <div className="relative">
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="p-2.5 bg-card border border-border rounded-full hover:border-primary/30 transition-all flex items-center justify-center"
          aria-label="Change accent color"
        >
          <Palette size={20} className="text-primary" />
        </button>

        {/* Color options dropdown */}
        {showColorPicker && (
          <div className="absolute bottom-12 left-0 bg-card border border-border rounded-md shadow-lg p-2 min-w-[180px]">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-muted-foreground mb-1 px-2">Select Accent</p>
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => {
                    changeAccentColor(themeOption.id);
                    setShowColorPicker(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm hover:bg-accent transition-colors ${
                    currentAccent === themeOption.id ? "bg-accent" : ""
                  }`}
                >
                  <span 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: `hsl(${themeOption.hue}, 80%, 50%)` }}
                  />
                  {themeOption.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="p-2.5 bg-card border border-border rounded-full hover:border-primary/30 transition-all flex items-center justify-center"
        aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {resolvedTheme === "dark" ? (
          <Sun size={20} className="text-primary" />
        ) : (
          <Moon size={20} className="text-primary" />
        )}
      </button>
    </div>
  );
} 