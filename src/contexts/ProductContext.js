import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      setLoading(false);
      fetchProducts();
    }, 1500);
  }, []);

  return (
    <productContext.Provider value={{ loading, products, setProducts }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
