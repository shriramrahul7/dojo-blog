import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center border-b py-4 ">
      <h1 className="text-3xl text-red-400 font-bold">Dojo Blog</h1>
      <div className="links font-semibold  text-base ">
        <Link to="/">Home</Link>
        <Link to="/create" className="ml-4">
          Create a Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
