import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo-suitmedia-remove.png";
import List from "./Header/list";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowHeader(false); // scroll ke bawah → sembunyi
    } else {
      setShowHeader(true); // scroll ke atas → muncul
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Menu list
  const menuItems = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Ideas", path: "/ideas" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-100 
      ${showHeader ? "translate-y-0 bg-orange-500/90 backdrop-blur-md" : "-translate-y-full"}
      flex justify-around items-center p-5`}
    >
      <img
        src={logo}
        alt="logo-suitmedia"
        className="w-[150px] invert brightness-0"
      />
      <ul className="flex sm:hidden gap-8 text-xl xl:flex text-white">
        {menuItems.map((item) => (
          <List
            key={item.name}
            nameList={item.name}
            isActive={location.pathname === item.path}
          />
        ))}
      </ul>
    </header>
  );
};

export default Header;
