// src/theme/createThemedStyles.ts
import { useTheme } from "./ThemeProvider";

export const createThemedStyles = (stylesFn: (theme: any) => any) => {
  return () => {
    const { theme } = useTheme();
    return stylesFn(theme);
  };
};
