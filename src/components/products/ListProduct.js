import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>
              <Link to={`/productdetail/${product.id}`}>{product.name}</Link>
            </h1>
            <div>{product.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
