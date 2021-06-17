import bulma from 'bulma/css/bulma.css';
import Navbar from './navbar.js';

export default function Contact() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <div className="hero-body has-background-info has-text-centered">
        <div className="container has-text-centered">
          <p className="title">Luke Hartley</p>
          <p className="subtitle">
            <strong>Contact Information:</strong>
          </p>
          <a
            className="subtitle"
            href="https://www.linkedin.com/in/luke-hartley7/"
          >
            LinkedIn
          </a>
          <p className="subtitle">Email: hartleyluke71@gmail.com</p>
          <p className="subtitle">Phone: 703 509 3051</p>
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
