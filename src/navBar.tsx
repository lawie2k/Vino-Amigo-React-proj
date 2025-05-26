import "./navBar.css";

function navBar() {
  return (
    <>
      <div className="navbar">
        <h1 className="navbarLogo">Vino Amigo</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>

        <div className="searchBar">
          <input type="text" />
          <button>search</button>
        </div>
      </div>
    </>
  );
}

export default navBar;
