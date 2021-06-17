import bulma from 'bulma/css/bulma.css';
import Navbar from './navbar.js';

export default function About() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <div className="hero-body has-background-warning has-text-centered">
        <div className="container has-text-centered">
          <p className="title">About lukehartley.net</p>
          <p className="subtitle">
            This is a personal website intended to show off my abilities in
            HTML, CSS, JS, Node.js, React, and Next.js
          </p>
          <p className="subtitle">
            I will also be uploading my personal projects such as, lukeCoin and
            lukeChess.
          </p>
        </div>
      </div>

      <footer className="footer is-small">
        <div className="content has-text-centered">
          <p>
            <strong>Personal Website</strong> by <a>Luke Hartley</a>. The source
            code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </section>
  );
}
