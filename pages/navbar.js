import bulma from 'bulma/css/bulma.css';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <script> </script>
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/luke-hartley7/"
        >
          <img src="/test.png" width="112" height="28" />
        </a>

        <a
          role="button"
          className={`navbar-burger burger${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setisActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item" href="/about">
            About
          </a>

          <a className="navbar-item" href="/contact">
            Contact
          </a>

          <a
            className="navbar-item"
            href="https://github.com/lukehart54/lukehartley-net"
          >
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
