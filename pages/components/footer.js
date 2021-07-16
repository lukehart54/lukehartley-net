import bulma from 'bulma/css/bulma.css';

export default function Footer() {
  return (
    <footer className="footer is-small">
      <div className="content has-text-centered">
        <p>
          <strong>Personal Website</strong> by <a>Luke Hartley</a>. The source
          code is licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            {' '}
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
