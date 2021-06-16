import bulma from 'bulma/css/bulma.css';
import Navbar from './navbar.js';

export default function Contact() {
  return (
    <section class="hero has-background-danger-light">
      <Navbar />
      <div class="hero-body has-background-primary">
        <p class="title">Luke Hartley</p>
        <p class="subtitle">Contact Information</p>
      </div>
    </section>
  );
}
