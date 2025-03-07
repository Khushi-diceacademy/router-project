import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Products() {
  const [products, setproducts] = useState([]);
  const fetchtheProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchtheProducts();
  }, []);
  return (
    <div>
      {products.length === 0 ? (
        <Loading />
      ) : (
        products.map((items, index) => (
          <div key={index}>
            <h1>{items.title}</h1>
            <img src={items.image} alt="" />
            <h2>{items.category}</h2>
          </div>
        ))
      )}
    </div>
    // mounting, unmounting and updating
  );
}

export default Products;
