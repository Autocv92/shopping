import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PoductDetail() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3004/products/${productId}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  // delete the product
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3004/products/${id}`).then((response) => {
      if (response.status === 200) {
        navigate("/listProduct");
      }
    });
  };

  const addToWishlist = (id) => {
    const payload = {
      productId: id,
    };
    axios.post(`http://localhost:3004/wishlist`, payload).then((response) => {
      if (response.status === 201) {
        alert("Product successfully added to wishlist");
      }
    });
  };

  return (
    <div>
      <p>Details component</p>
      Name: {productDetail.name} <br />
      Description: {productDetail.desc}
      <button onClick={() => handleDelete(productDetail.id)}>
        Delete Product
      </button>
      <button onClick={() => addToWishlist(productDetail.id)}>
        Add to wishlist
      </button>
    </div>
  );
}

export default PoductDetail;
