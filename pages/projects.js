import bulma from 'bulma/css/bulma.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

export default function Projects() {
  return (
    <section className="hero is-fullheight is">
      <Navbar />
      <div className="hero-body has-background-primary has-text-centered">
        <div className="container has-text-centered">
          <figure
            className="is-inline-block is-clickable"
            style={{ width: 350 }}
          >
            <a href="/projects/lukeToken">
              <img href="/token" src="/LTResize.png"></img>
            </a>
          </figure>
          <figure className="image is-inline-block" style={{ width: 300 }}>
            <a>
              <img className="image" src="/alukeChess-quickdraft.png"></img>
            </a>
          </figure>
        </div>
      </div>
      <Footer />
    </section>
  );
}
