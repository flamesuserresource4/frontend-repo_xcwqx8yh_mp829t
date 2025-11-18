import { createContext, useContext } from "react";

export const theme = {
  brand: {
    bg: "bg-gradient-to-br from-rose-950 via-slate-950 to-black",
    primary: "rose-700",
    textOnBrand: "text-rose-50",
  },
};

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  return children;
}
