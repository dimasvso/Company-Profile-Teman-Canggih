import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Template() {
  const location = useLocation();

  const navbarConfig = {
    "/": "home",
    "/about": "none",
    "/contact": "none",
  };

  const config = navbarConfig[location.pathname] || { variant: "home" };

  return (
    <>
      <section className="overflow-x-hidden w-full bg-[#F9F9FA]">
        <Navbar variant={config} />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}
