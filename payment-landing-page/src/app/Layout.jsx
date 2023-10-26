import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../components/Button";
import StarlingBank from "../images/starling-bank.svg";

const links = [
  { name: "Home", ref: "/" },
  { name: "Features", ref: "features" },
  { name: "Pricing", ref: "pricing" },
  { name: "Help", ref: "help" },
  { name: "Blogs", ref: "blogs" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="h-screen w-screen bg-midnight md:pl-20 pl-6 md:pr-20 pr-6">
        <div>
          <nav>
            <div className="md:p-10 md:flex md:items-center">
              <div className="md:w-1/3 md:pt-0 pt-6">
                <img src={StarlingBank} />
              </div>
              <div
                className="md:hidden text-3xl text-white absolute right-8 top-6 cursor-pointer"
                onClick={toggleMenu}
              >
                <ion-icon name={open ? "close" : "menu"} />
              </div>
              <NavBar />
              {open && <MobileNavBar />}
            </div>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

const NavBar = () => {
  return (
    <>
      <div className="hidden md:w-full md:flex md:justify-between md:items-center">
        <ul className="list-none md:flex md:items-center">
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-4 text-white hover:text-gray-400"
            >
              <Link to={link.ref}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="md:ml-8 md:flex space-x-4">
          <Button text="Log In" />
          <Button text="Sign Up" />
        </div>
      </div>
    </>
  );
};

const MobileNavBar = () => {
  return (
    <>
      <div className="md:hidden absolute right-8 text-end opacity-100 z-40">
        <div>
          <ul>
            {links.map((link) => (
              <li
                key={link.name}
                className="my-2 text-white text-lg hover:text-gray-400"
              >
                <Link to={link.ref}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <Button text="Log In" />
          <Button text="Sign Up" />
        </div>
      </div>
    </>
  );
};

export default Layout;
