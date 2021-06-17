import bulma from 'bulma/css/bulma.css';
import Navbar from './navbar.js';

export default function Home() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <div className="hero-body has-background-primary has-text-centered">
        <div className="container has-text-centered">
          <figure className="image is-256x256 is-inline-block">
            <img className="image" src="/headShot.png"></img>
          </figure>
          <p className="title m-4">Welcome to My Website</p>
          <p className="subtitle">Click around to see more!</p>
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
