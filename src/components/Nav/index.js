import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <h1>News Reader</h1>
      <div className="links" style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </div>
    </nav>
  );
};

export default Nav;
