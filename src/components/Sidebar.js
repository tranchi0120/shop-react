import React from "react";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "./../contexts/CartContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[55vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px lg:h-[640px] overflow-auto border-b-2">
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          );
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4 px-3">
        <div className=" flex w-full justify-between items-center ">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">
              Total: $ {parseFloat(total).toFixed(2)}
            </span>
          </div>
          <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 onClick={clearCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
