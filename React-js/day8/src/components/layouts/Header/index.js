import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { IoIosLogOut, IoLogoFacebook, IoIosLogIn } from "react-icons/io";

export default function Header() {
  const { logout } = useAuth();
  return (
    <>
      <header className="page-header ">
        <div className="container flex">
          <div className="header-logo mt-5">
            <NavLink to="/" exact activeClassName="active">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="Logo brand"
              />
            </NavLink>
          </div>
          <nav className="header-nav-menu">
            <ul className="menu-list flex">
              <li className="menu-item p-15">
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="menu-item p-15">
                <NavLink to="/about-us" activeClassName="active">
                  About us
                </NavLink>
              </li>
              <li className="menu-item p-15">
                <NavLink to="/products" activeClassName="active">
                  Product list
                </NavLink>
              </li>
              <li className="menu-item p-15">
                <NavLink to="/my-account" activeClassName="active">
                  My Account
                </NavLink>
              </li>
            </ul>
          </nav>
          <ul className="social-list flex">
            <li className="social-item p-15">
              <Link to="/auth/login">
                <IoIosLogIn />
              </Link>
            </li>
            <li className="social-item p-15">
              <Link to="/">
                <IoIosLogOut onClick={() => logout()} />
              </Link>
            </li>
            <li className="social-item p-15">
              <Link to="/">
                <IoLogoFacebook />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
