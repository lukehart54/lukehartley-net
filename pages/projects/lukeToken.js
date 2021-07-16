import bulma from 'bulma/css/bulma.css';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default function Token() {
  return (
    <section className="hero is-fullheight">
      <Navbar />
      <div className="hero-body has-background-warning has-text-centered">
        <div className="container has-text-centered">
          <a href="https://github.com/lukehart54/lukeToken">
            <figure>
              <img style={{ width: 200 }} src="/lukeToken_coin.png" />
            </figure>
          </a>
          <p className="title">About lukeToken</p>
          <p className="subtitle">
            lukeToken (LKT) is my own BEP-20 Token made on the Binance Smart
            Chain
          </p>
          <p className="subtitle">Total Supply: 1,000,000</p>
          <p className="subtitle">
            Avaliable to swap/buy on{' '}
            <a
              href="https://exchange.pancakeswap.finance/#/swap"
              target="_blank"
            >
              PancakeSwap
            </a>
          </p>
          <p className="subtitle">
            lukeToken transactions and information are visible on{' '}
            <a
              href="https://bscscan.com/token/0xe1411254c0b5a92e881038de717453862926e84b?a=0x4219aB50c95fE0CFC99fB9f1C0C5F83f21bd9936"
              target="_blank"
            >
              BSCScan
            </a>
            , this can also be found by searching the contract address
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
