import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AddUser from "./components/users/AddUser";
import ListUser from "./components/users/ListUser";
import AddProduct from "./components/products/AddProduct";
import ListProduct from "./components/products/ListProduct";
import PoductDetail from "./components/products/PoductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="users" element={<ListUser />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="listProduct" element={<ListProduct />} />
        <Route path="productdetail/:productId" element={<PoductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
