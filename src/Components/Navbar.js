import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <header className="header">
      <div className="overlay has-fade"></div>
      <nav>
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div id="btnHamburger" className="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__links">
          <Link to="/about">About Us</Link>
          <Link to="/accounts">Accounts</Link>
          <Link to="/trading">Trading</Link>
          <Link to="/terms">Resources</Link>
          <button className="header__lg-btn">Login</button>
          <button className="header__oa-btn">Open Account</button>
        </div>
      </nav>
      <div className="header__menu has-fade">
        <Link to="/about">About Us</Link>
        <Link to="/accounts">Accounts</Link>
        <Link to="/trading">Trading</Link>
        <Link to="/terms">Resources</Link>
        <button className="header__lg-btn">Login</button>
        <button className="header__oa-btn">Open Account</button>
      </div>
    </header>
  )
}

export default Navbar
