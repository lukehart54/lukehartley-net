import bulma from 'bulma/css/bulma.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

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
      <Footer />
    </section>
  );
}
