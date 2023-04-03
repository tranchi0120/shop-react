import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((acc, currentItem) => {
      return acc + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((acc, current) => {
      return acc + current.price * current.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  const addTocart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item  is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // if cart item already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmout = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addTocart(cartItem, id);
  };

  const decreaseAmout = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addTocart,
        removeFromCart,
        clearCart,
        increaseAmout,
        decreaseAmout,
        itemAmount,
        setItemAmount,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
