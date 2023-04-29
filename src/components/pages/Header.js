import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-menu">
      <Link to="/">Home</Link>
      <Link to="adduser">Add user</Link>
      <Link to="users">User List</Link>
      <Link to="addproduct">Add product</Link>
      <Link to="listProduct">product List</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}

export default Header;
