"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Palette } from "lucide-react"
import { themes } from "@/lib/themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function ThemeColorToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentAccent, setCurrentAccent] = useState("teal")

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Get saved accent from localStorage or use default
    const savedAccent = localStorage.getItem("accentColor") || "teal"
    setCurrentAccent(savedAccent)
    applyAccentColor(savedAccent)
  }, [])

  // Apply the accent color to the CSS variables
  const applyAccentColor = (accentId: string) => {
    const selectedTheme = themes.find((t) => t.id === accentId) || themes[0]
    const hue = selectedTheme.hue
    const root = document.documentElement
    
    // Store the selection in localStorage
    localStorage.setItem("accentColor", accentId)
    
    // Apply the color based on the current theme mode
    const isDark = resolvedTheme === "dark"
    
    if (isDark) {
      // Dark theme properties
      root.style.setProperty("--primary", `${hue} 84% 40%`)
      root.style.setProperty("--accent", `${hue} 84% 12%`)
      root.style.setProperty("--accent-foreground", `${hue} 84% 60%`)
    } else {
      // Light theme properties
      root.style.setProperty("--primary", `${hue} 70% 40%`)
      root.style.setProperty("--muted", `${hue} 10% 96%`)
      root.style.setProperty("--muted-foreground", `${hue} 5% 45%`)
      root.style.setProperty("--accent", `${hue} 30% 90%`)
      root.style.setProperty("--accent-foreground", `${hue} 70% 25%`)
      root.style.setProperty("--border", `${hue} 10% 90%`)
      root.style.setProperty("--input", `${hue} 10% 90%`)
    }
  }

  // Update accent color when theme changes
  useEffect(() => {
    if (mounted && currentAccent) {
      applyAccentColor(currentAccent)
    }
  }, [resolvedTheme, mounted, currentAccent])

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Theme settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px]">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Mode options */}
        <DropdownMenuLabel className="text-xs text-muted-foreground">Mode</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center justify-between">
          Dark
          {resolvedTheme === "dark" && <span className="text-primary">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center justify-between">
          Light
          {resolvedTheme === "light" && <span className="text-primary">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center justify-between">
          System
          {theme === "system" && <span className="text-primary">✓</span>}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        {/* Theme color options */}
        <DropdownMenuLabel className="text-xs text-muted-foreground">Accent Color</DropdownMenuLabel>
        {themes.map((themeOption) => (
          <DropdownMenuItem 
            key={themeOption.id}
            onClick={() => applyAccentColor(themeOption.id)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: `hsl(${themeOption.hue}, 80%, 50%)` }}
              />
              {themeOption.name}
            </div>
            {currentAccent === themeOption.id && <span className="text-primary">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 