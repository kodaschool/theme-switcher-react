import { ReactNode, createContext, useContext, useState } from "react";
interface ThemeContextType {
  theme: string;
  toggleLightTheme: () => void;
  toggleDarkTheme: () => void;
}
interface IProps {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState("light");
  const toggleDarkTheme = () => {
    setTheme("dark");
  };
  const toggleLightTheme = () => {
    setTheme("light");
  };
  const value = {
    theme,
    toggleDarkTheme,
    toggleLightTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("Context must be used within a context provider");
  }
  return context;
};
