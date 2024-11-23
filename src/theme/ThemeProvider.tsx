// src/theme/ThemeProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import { useColorScheme } from "react-native";

type ThemeContextType = {
  theme: typeof lightTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = useColorScheme(); // 'light' or 'dark'
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === "dark");

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
