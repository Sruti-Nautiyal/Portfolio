import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
function Header({ darkMode, setDarkMode }) {
  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5 ">
        <h1 className="text-lg">Sruti Nautiyal</h1>
        <div onClick={handleChange}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
