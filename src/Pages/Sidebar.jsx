import React from 'react';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

const Sidebar = ({ isDarkMode, toggleTheme }) => {
  return (
    <aside
      className={`h-full w-80 p-4 fixed top-0 left-0 z-[99999] ${
        isDarkMode ? 'bg-zinc-800 text-white' : 'bg-white text-black'
      }`}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <FaUserCircle className="h-16 w-16 text-gray-500" />
        <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
        <div className="flex items-center mt-2">
          <BsTelephoneFill className="mr-2" />
          <span>+123 456 7890</span>
        </div>
      </div>

      
    </aside>
  );
};

export default Sidebar;
