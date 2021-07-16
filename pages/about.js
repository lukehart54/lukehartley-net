import bulma from 'bulma/css/bulma.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

export default function About() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <div className="hero-body has-background-warning has-text-centered">
        <div className="container has-text-centered">
          <p className="title">About lukehartley.net</p>
          <p className="subtitle">
            This is a personal website intended to show off my abilities in
            HTML, CSS, JS, Node.js, React, Next.js, and Solidity
          </p>
          <p className="subtitle">
            In addition, I will be uploading my personal projects such as,
            <a href="https://github.com/lukehart54/lukeToken"> lukeToken</a> and
            lukeChess.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
