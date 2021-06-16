import Head from 'next/head';
import styles from '../styles/Home.module.css';
import bulma from 'bulma/css/bulma.css';
import Home from './home.js';
import Navbar from './navbar.js';
import CoinCard from './project-card';

export default function Index() {
  return (
    <section class="hero has-background-danger-light">
      <Navbar />
      <Home />
      <CoinCard />
    </section>
  );
}
