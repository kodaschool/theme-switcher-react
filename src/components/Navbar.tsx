import { useTheme } from "../context/useThemeContext";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <nav className="flex h-20  items-center justify-between">
      <h1 className="italics">BuySasa</h1>
      <div
        onClick={handleToggle}
        className="w-[40px] h-[40px] flex items-center justify-center rounded-md border-2 border-darkmode dark:border-white"
      >
        {theme ? <BsFillMoonStarsFill size={20} /> : <MdLightMode size={20} />}
      </div>
    </nav>
  );
};

export default Navbar;
