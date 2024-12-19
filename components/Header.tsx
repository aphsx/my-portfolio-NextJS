const Header = () => {
  return (
    <header className="flex items-center w-full dark:bg-gray-950 justify-between py-10 ">
      {/* โลโก้ */}
      <a className="break-words" aria-label="TailwindBlog" href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">

          </div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            TailwindBlog
          </div>
        </div>
      </a>

      {/* เมนู */}
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {/* ลิงก์เมนู */}
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          <a
            className="block font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            href="#"
          >
            Blog
          </a>
          <a
            className="block font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            href="#"
          >
            Tags
          </a>
          <a
            className="block font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            href="#"
          >
            Projects
          </a>
          <a
            className="block font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
            href="#"
          >
            About
          </a>
        </div>
        {/* ไอคอนค้นหา */}
        <button aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-primary-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        {/* ตัวเลือกธีม */}
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
      </div>
    </header>
  );
};

export default Header;
