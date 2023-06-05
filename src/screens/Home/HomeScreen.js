import React, { useEffect, useState } from "react";
import "../Home/HomeScreen.css";
import ProductsCard from "../../components/ProductCard/ProductsCard";

const HomeScreen = () => {
  const [products, setProducts] = useState();
  console.log("My products--", products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="container p-md-5 mt-4">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products &&
        products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
    </div>
    </div>
  );
};

export default HomeScreen;
