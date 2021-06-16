import bulma from 'bulma/css/bulma.css';
import Navbar from './navbar.js';

export default function Home() {
  return (
    <section className="hero has-background-danger-light">
      <Navbar />
      <div class="hero-body has-background-primary">
        <p class="title">Luke Hartley</p>
        <p class="subtitle">Welcome to My Website</p>
      </div>
    </section>
  );
}
