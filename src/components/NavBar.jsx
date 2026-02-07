import {useState} from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg brand-pink py-4 px-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-3 h5" to="/">
          DukaLetu
        </NavLink>

        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          {isOpen ? (
            <span style={{fontSize: "1.5rem"}}>&times;</span> // X icon
          ) : (
            <span className="navbar-toggler-icon"></span> // hamburger
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item h5">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
                end
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item h5">
              <NavLink className="nav-link" to="/products">
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item h5">
              <NavLink className="nav-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
