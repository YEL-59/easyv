import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { title: "Home", url: "/" },
    { title: "Features", url: "/#" },
    { title: "Pricing", url: "/pricing" },
    { title: "Support", url: "#" },
  ];

  return (
    <nav className="bg-background py-4 h-[90px] flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/">
          <h1 className="font-bold text-3xl">EasyMigrate</h1>
        </Link>

        <ul
          className="hidden md:flex gap-10 text-black font-montserrat text-base not-italic font-normal leading-normal
"
        >
          {navitems.map((item, index) => (
            <li key={index} className="hover:text-gray-700 transition">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <Button className="bg-primary text-white px-7">Sign UP</Button>

        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen && <Menu size={28} />}{" "}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-navbg shadow-md transition-all duration-300 ease-in-out md:hidden z-[20] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-4 text-#315215 bg-[#b5f169] h-full text-lg">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1>EasyMigrate</h1>
            </Link>
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
          </div>
          <ul>
            {navitems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#315215] transition py-4 px-6 text-scale-110"
              >
                <Link to={item.url} onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
