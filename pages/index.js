import Head from 'next/head';
import styles from '../styles/Home.module.css';
import bulma from 'bulma/css/bulma.css';
import Home from './home.js';
import Navbar from './navbar.js';
import CoinCard from './project-card';

export default function Index() {
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
