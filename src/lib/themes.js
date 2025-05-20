/**
 * Theme configuration
 * Each theme has a name, a primary color (hue), and other properties
 */

export const themes = [
  {
    id: "teal",
    name: "Teal",
    hue: 175,
    darkPrimaryHue: 175,
    lightPrimaryHue: 175,
  },
  {
    id: "purple",
    name: "Purple",
    hue: 260,
    darkPrimaryHue: 260,
    lightPrimaryHue: 260,
  },
  {
    id: "blue",
    name: "Blue",
    hue: 200,
    darkPrimaryHue: 200,
    lightPrimaryHue: 200,
  },
  {
    id: "amber",
    name: "Amber",
    hue: 35,
    darkPrimaryHue: 35,
    lightPrimaryHue: 35,
  },
  {
    id: "rose",
    name: "Rose",
    hue: 340,
    darkPrimaryHue: 340,
    lightPrimaryHue: 340,
  },
];

// Default theme
export const defaultTheme = "teal"; 