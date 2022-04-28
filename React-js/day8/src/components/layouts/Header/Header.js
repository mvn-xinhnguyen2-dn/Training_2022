import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='header-page '>
        <div className='container flex'>
          <div className='header-logo mt-5'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Logo brand"/></div>
          <nav className='header-nav-menu'>
            <ul className='menu-list flex'>
              <li className='menu-item p-15'><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
              <li className='menu-item p-15'><NavLink to="/about-us" activeClassName="active">About us</NavLink></li>
              <li className='menu-item p-15'><NavLink to="/user" activeClassName="active">UserList</NavLink></li>
            </ul>
          </nav>
          <ul className='social-list flex'>
            <li className='social-item p-15'><i className="fa-brands fa-facebook"></i></li>
            <li className='social-item p-15'><i className="fa-brands fa-facebook-messenger"></i></li>
            <li className='social-item p-15'><i className="fa-solid fa-envelope-circle-check"></i></li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  )
}
