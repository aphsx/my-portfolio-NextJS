import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State สำหรับเปิด/ปิดเมนู
  const [isDarkMode, setIsDarkMode] = useState(false); // State สำหรับเปลี่ยนธีม

  const toggleMenu = () => {
    setIsOpen(!isOpen); // สลับสถานะเมนู
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // สลับธีมระหว่าง Light/Dark
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center w-full dark:bg-gray-950 justify-between py-6 px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <Link href="/" className="break-words" aria-label="TailwindBlog">
        <div className="flex items-center">
          <div className="text-lg sm:text-2xl font-bold hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400">
            aphsx dev
          </div>
        </div>
      </Link>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="block sm:hidden text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5"
          />
        </svg>
      </button>

      {/* Menu (Responsive) */}
      <nav
        className={`fixed top-0 left-0 z-50 h-full w-3/4 bg-white dark:bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:static sm:translate-x-0 sm:flex sm:items-center sm:bg-transparent sm:shadow-none sm:w-auto`}
      >
        <ul className="flex flex-col items-start space-y-6 px-6 pt-20 sm:flex-row sm:space-y-0 sm:space-x-6 sm:pt-0">
          <li>
            <Link
              href="/"
              className="text-lg font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-lg font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            >
              About
            </Link>
          </li>

          {/* Theme Selector สำหรับหน้าจอเล็ก */}
          <li className="sm:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Theme switcher"
              type="button"
              className="flex items-center justify-center text-lg font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
          <li>
          <div className="mr-5 flex items-center">
        <div className="relative inline-block text-left">
          <div className="flex items-center justify-center hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400">
            <button
              aria-label="Theme switcher"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="group:hover:text-gray-100 h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
          </li>
        </ul>
      </nav>

      {/* Overlay สำหรับปิดเมนู */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 z-40 bg-black bg-opacity-50 sm:hidden"
        ></div>
      )}

      {/* Theme Selector สำหรับหน้าจอใหญ่ */}

      
    </header>
  );
};

export default Header;
