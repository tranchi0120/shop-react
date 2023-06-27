import React from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";

import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  });

  return (
    <header
      className={`${
        active ? "bg-red-300 shadow-md" : "bg-none"
      } fixed w-full z-10 transition-all   py-4  shadow-xl `}
    >
      <div className="container mx-auto flex items-center justify-between ">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" alt="" src={Logo} />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
