import { Outlet } from "react-router-dom";
import Navbar from "../pages/Share/Navbar";
import Footer from "../pages/Share/Footer";

const Main = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
      </div>
      <div >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
