import React from "react";
import { Link } from "react-router-dom";
import MERLIN from "../MARLIN.png"; // Ensure this path is correct

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header" style={{ position: 'relative' }}>
          <img
            src={MERLIN}
            alt="Logo"
            style={{
              position: 'absolute',
              top: '10px',
              left: '-350px',
              width: '90px',
              height: 'auto',
              zIndex: 1000
            }}
          />
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ marginLeft: '70px' }}
          >
            MARLIN AQUATIC CENTER
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {/* Use anchor tags for page sections */}
            <li><a href="#about" className="page-scroll">Why Merlin</a></li>
            <li><a href="#services" className="page-scroll">Packages</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
            {/* Use Link for routing */}
            <li><Link to="/login" className="page-scroll">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};