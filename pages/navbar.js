import bulma from 'bulma/css/bulma.css';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <script> </script>
      <div class="navbar-brand">
        <a
          class="navbar-item"
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
        <div class="navbar-start">
          <a class="navbar-item">
            <Link href="/">Home</Link>
          </a>
          <a class="navbar-item">
            <Link href="/contact">Contact</Link>
          </a>
          <a class="navbar-item">
            <Link href="https://github.com/lukehart54/lh-net-react">
              Documentation
            </Link>
          </a>
          <a class="navbar-item">
            <Link href="/about">About</Link>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
