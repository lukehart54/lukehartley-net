import bulma from 'bulma/css/bulma.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

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
      <Footer />
    </section>
  );
}
