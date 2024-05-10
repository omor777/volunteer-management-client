import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Root = () => {
  return (
    <div className=" dark:bg-gray-800 bg-white">
      <Navbar />
      <div className="mt-28 min-h-[calc(100vh-272px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
