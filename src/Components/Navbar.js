import React from "react";
import Alldata from "../Alldata.json";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Alldata.Links.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
            <div className="buttons">
              <button className="btn btn-warning btn-sm b1">Subscribe</button>
              <button className="btn btn-dark btn-sm b2">Sign In</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
