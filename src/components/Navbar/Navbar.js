import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/reducers/authReducer";
import { logout } from "../../redux/reducers/authReducer";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const isAuthenticated = user;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onLogoutHandler = () => {
    scrollTop();
    dispatch(logout());
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-container">
        <NavLink to="/" className="wordmark" onClick={scrollTop}>
          Busy Buy
        </NavLink>

        <ul className={`nav-links ${mobileMenuOpen ? "nav-links--open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => {
                scrollTop();
                setMobileMenuOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>

          {isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/myorders"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My orders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cart"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cart
                </NavLink>
              </li>
            </>
          )}

          <li>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  onLogoutHandler();
                  setMobileMenuOpen(false);
                }}
                className="nav-link nav-link--button"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/signin"
                className="nav-link nav-link--cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </NavLink>
            )}
          </li>
        </ul>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;