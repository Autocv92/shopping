import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page|</Link>
      <Link to="contact">Click to view our contact page|</Link>
      <Link to="adduser">Add user|</Link>
      <Link to="users">User List|</Link>
      <Link to="addproduct">Add product|</Link>
      <Link to="listProduct">product List|</Link>
    </div>
  );
}

export default Home;
