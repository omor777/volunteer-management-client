import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [theme, setTheme] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // for mobile menu
    if (open) {
      menuRef.current.classList.remove("hidden");
    } else {
      menuRef.current.classList.add("hidden");
    }
    // for dropdown menu
    if (dropdown) {
      dropdownRef.current.classList.remove("hidden");
    } else {
      dropdownRef.current.classList.add("hidden");
    }
    // for dark and light mode
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [open, dropdown, theme]);

  const handleTheme = (e) => {
    setTheme(e.target.checked);
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <header className="shadow-md py-2 ">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CareCrowd
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <label className="inline-flex items-center me-5 cursor-pointer">
              <input
                onChange={handleTheme}
                type="checkbox"
                defaultValue=""
                className="sr-only peer"
                defaultChecked=""
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600" />
            </label>

            <div className="flex items-center">
              {!user ? (
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase"
                  >
                    Login
                  </button>
              </Link>
              ) : (
                <div className="flex items-center gap-5">
                  {user ? (
                    <img
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full"
                      src={user?.photoURL}
                      alt="Rounded avatar"
                    />
                  ) : (
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}

                  <button
                    onClick={handleLogout}
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase"
                  >
                    logout
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setOpen((pevOpen) => !pevOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            ref={menuRef}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-primary md:bg-transparent  block py-2 px-3 text-white rounded md:hover:bg-transparent md:text-violet-700 md:p-0 md:dark:hover:text-violet-500  dark:hover:text-white md:dark:hover:bg-transparent dark:text-violet-500 dark:border-gray-700 capitalize"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 capitalize"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/need-volunteer"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-primary md:bg-transparent  block py-2 px-3  rounded md:hover:bg-transparent text-violet-700 md:p-0 md:dark:hover:text-violet-500  dark:hover:text-white md:dark:hover:bg-transparent dark:text-violet-500 dark:border-gray-700 capitalize"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 capitalize"
                  }
                >
                  Need volunteer page
                </NavLink>
              </li>
              <li className="relative ">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="block w-full text-left py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  type="button"
                >
                  My Profile{" "}
                  {/* <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg> */}
                </button>
                {/* Dropdown menu */}
                <div
                  ref={dropdownRef}
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute -right-16 top-11"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <NavLink
                        to="/add-volunteer-post"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize"
                      >
                        add volunteer post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/manage-my-post"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize"
                      >
                        manage my post
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="md:hidden">
                <NavLink
                  to="/add-volunteer-post"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-primary md:bg-transparent  block py-2 px-3  rounded md:hover:bg-transparent text-violet-700 md:p-0 md:dark:hover:text-violet-500  dark:hover:text-white md:dark:hover:bg-transparent dark:text-violet-500 dark:border-gray-700 capitalize"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 capitalize"
                  }
                >
                  Add volunteer post
                </NavLink>
              </li>
              <li className=" md:hidden">
                <NavLink
                  to="/manage"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-primary md:bg-transparent  block py-2 px-3  rounded md:hover:bg-transparent text-violet-700 md:p-0 md:dark:hover:text-violet-500  dark:hover:text-white md:dark:hover:bg-transparent dark:text-violet-500 dark:border-gray-700 capitalize"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 capitalize"
                  }
                >
                  manage my post
                </NavLink>
              </li>

              <li className="md:hidden mt-5">
                <button
                  onClick={handleLogout}
                  type="button"
                  className="text-white   bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none 
                 focus:ring-primary-light font-medium rounded-lg text-sm px-6 py-2 text-center dark:bg-violet-600 dark:hover:bg-bg-primary-dark dark:focus:ring-blue-800 uppercase"
                >
                  logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
