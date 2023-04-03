import React from "react";
import { useContext } from "react";
import { productContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
  const { products, loading } = useContext(productContext);

  // get only men's clothing and women's clothing
  const fillterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          {loading ? (
            <div className="h-screen flex justify-center items-center animate-spin text-3xl">
              <AiOutlineLoading3Quarters />
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {fillterProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
