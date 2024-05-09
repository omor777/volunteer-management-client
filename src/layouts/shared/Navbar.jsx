import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <header className="shadow-md py-2">
      <nav className="navbar container">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Management</a>
        </div>
        <div className="flex-none gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink>Need Volunteer Page</NavLink>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <p>My Profile</p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-md bg-base-100  w-64 space-y-1"
            >
              <li>
                <Link
                  to="/add-volunteer-post"
                  className="capitalize font-medium"
                >
                  Add volunteer post
                </Link>
              </li>
              <li>
                <Link className="capitalize font-medium">manage my post</Link>
              </li>
              <li>
                <Link className="capitalize font-medium">
                  my volunteer requested post
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            {!user ? (
              <Link to={"/login"}>
                <button className="bg-primary py-2.5 px-6 rounded-md text-white uppercase font-medium hover:bg-primary-dark duration-300">
                  Login
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-5">
                <img
                  referrerPolicy="no-referrer"
                  className="bg-red-100 size-11 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt=""
                />
                <button
                  onClick={handleLogout}
                  type="button"
                  className="bg-primary py-2.5 px-6 rounded-md text-white uppercase font-medium hover:bg-primary-dark duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
