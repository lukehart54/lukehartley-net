import Head from 'next/head';
import bulma from 'bulma/css/bulma.css';
import Home from './home.js';
import Navbar from './navbar.js';
import CoinCard from './project-card';

export default function Index() {
  return (
    <section className="hero has-background-danger-light">
      <Home />
    </section>
  );
}
