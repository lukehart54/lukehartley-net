import bulma from 'bulma/css/bulma.css';
import Navbar from './navbar.js';

export default function About() {
  return (
    <section class="hero has-background-danger-light">
      <Navbar />
      <div class="hero-body has-background-primary">
        <p class="title">About</p>
        <p class="subtitle">This page is for explaining the website</p>
      </div>
    </section>
  );
}
