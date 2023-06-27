import React from "react";
import { Link } from "react-router-dom";

import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, image, title, price, amount } = item;

  const { removeFromCart, increaseAmout, decreaseAmout } = useContext(CartContext);

  return (
    <div className="flex items-center justify-center gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500  ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline "
              to={`/Product/${id}`}
            >
              {title}
            </Link>
            {/* remove icon */}
          </div>
          <div className=" flex gap-x-2 h-[36px] test-sm items-center ">
            {/* quatity */}
            <div className="flex  gap-x-5 max-w-[100px]  items-center h-full border text-primary font-medium">
              <div
                className="flex-1 flex items-center cursor-pointer"
                onClick={() => decreaseAmout(id)}
              >
                <IoMdRemove />
              </div>
              <div>{amount}</div>
              <div
                className="flex-1 flex items-center cursor-pointer"
                onClick={() => increaseAmout(id)}
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex  items-center justify-around">
              $ {price}
            </div>

            <div className="flex-1 flex items-center justify-end">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
      {/* title & remove icon */}
      <div className="text-xl cursor-pointer">
        <IoMdClose
          onClick={() => removeFromCart(id)}
          className="text-gray-500 hover:text-red-500 transition"
        />
      </div>
    </div>
  );
};

export default CartItem;
