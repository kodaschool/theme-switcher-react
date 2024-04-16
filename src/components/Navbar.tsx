import { useTheme } from "../context/useThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <nav className="flex h-20 items-center justify-between">
      <h1 className="italics">Buy Sasa</h1>
      <div onClick={handleToggle}>Theme switcher</div>
    </nav>
  );
};

export default Navbar;
