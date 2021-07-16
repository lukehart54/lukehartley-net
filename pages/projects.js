import bulma from 'bulma/css/bulma.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

export default function Projects() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <div className="hero-body has-background-primary has-text-centered">
        <div className="container has-text-centered">
          <a href="/projects/lukeToken">
            <figure
              className="image is-inline-block is-clickable"
              style={{ width: 500 }}
            >
              <img href="/token" src="/LTResize.png"></img>
            </figure>
          </a>

          <figure className="image is-inline-block" style={{ width: 400 }}>
            <img className="image" src="/alukeChess-quickdraft.png"></img>
          </figure>
        </div>
      </div>

      <Footer />
    </section>
  );
}
