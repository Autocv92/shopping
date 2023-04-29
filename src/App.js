import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AddUser from "./components/users/AddUser";
import ListUser from "./components/users/ListUser";
import AddProduct from "./components/products/AddProduct";
import ListProduct from "./components/products/ListProduct";
import PoductDetail from "./components/products/PoductDetail";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
