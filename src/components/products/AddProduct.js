import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const onSubmithandler = (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      desc: desc,
    };

    axios.post("http://localhost:3004/products", payload).then((res) => {
      if (res.status === 201) {
        navigate("/listProduct");
      }
    });
  };

  return (
    <div>
      <h2>Add Product Copmonent</h2>
      <form onSubmit={onSubmithandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
