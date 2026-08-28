import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeId =
  | "light"
  | "midnight"
  | "emerald"
  | "sapphire"
  | "mocha"
  | "amoled"
  | "frost"
  | "crimson"
  | "matrix"
  | "synthwave"
  | "tokyo";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  category: "Standard" | "Vibrant" | "Cyber" | "Special";
  colors: [string, string]; // Preview color swatches
  isDark: boolean;
}

export const THEMES: ThemeOption[] = [
  {
    id: "midnight",
    name: "Midnight Obsidian",
    category: "Standard",
    colors: ["#0f172a", "#8b5cf6"],
    isDark: true,
  },
  {
    id: "amoled",
    name: "AMOLED Pure Black",
    category: "Special",
    colors: ["#000000", "#a855f7"],
    isDark: true,
  },
  {
    id: "emerald",
    name: "Emerald Cyberpunk",
    category: "Vibrant",
    colors: ["#090f10", "#10b981"],
    isDark: true,
  },
  {
    id: "sapphire",
    name: "Royal Sapphire",
    category: "Standard",
    colors: ["#060b19", "#3b82f6"],
    isDark: true,
  },
  {
    id: "mocha",
    name: "Cosmic Mocha",
    category: "Special",
    colors: ["#0d0b11", "#fb7185"],
    isDark: true,
  },
  {
    id: "frost",
    name: "Nordic Frost",
    category: "Standard",
    colors: ["#0b1320", "#06b6d4"],
    isDark: true,
  },
  {
    id: "crimson",
    name: "Crimson Eclipse",
    category: "Special",
    colors: ["#14080e", "#f43f5e"],
    isDark: true,
  },
  {
    id: "matrix",
    name: "Neon Matrix",
    category: "Cyber",
    colors: ["#051409", "#22c55e"],
    isDark: true,
  },
  {
    id: "synthwave",
    name: "Sunset Synthwave",
    category: "Cyber",
    colors: ["#13091f", "#ec4899"],
    isDark: true,
  },
  {
    id: "tokyo",
    name: "Tokyo Night",
    category: "Vibrant",
    colors: ["#0d1117", "#818cf8"],
    isDark: true,
  },
  {
    id: "light",
    name: "Pure Light",
    category: "Standard",
    colors: ["#ffffff", "#6366f1"],
    isDark: false,
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  toggleTheme: () => void;
  isDark: boolean;
  currentThemeOption: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    const saved = localStorage.getItem("portfolio_theme") as ThemeId | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      return saved;
    }
    // Backward compatibility with previous 'theme' key
    const oldSaved = localStorage.getItem("theme");
    if (oldSaved === "light") return "light";
    if (oldSaved === "dark") return "midnight";

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "midnight" : "light";
  });

  const currentThemeOption = THEMES.find((t) => t.id === theme) || THEMES[0];
  const isDark = currentThemeOption.isDark;

  const setTheme = (id: ThemeId) => {
    setThemeState(id);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "midnight" : "light"));
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // Set data-theme attribute
    root.setAttribute("data-theme", theme);

    // Set light or dark class for Tailwind dark: modifier compatibility
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    localStorage.setItem("portfolio_theme", theme);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [theme, isDark]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark, currentThemeOption }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
