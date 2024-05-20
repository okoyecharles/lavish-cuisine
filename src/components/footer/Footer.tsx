import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <header>
          <a href="/">
            <img
              src="/assets/logo-large.png"
              alt="Logo"
              className="footer__image"
              height={48}
            />
          </a>
        </header>
        <div className="footer__content">
          <p>
            Built by{" "}
            <a href="https://okoyecharles.com" target="_blank" rel="noreferrer noopener">
              Okoye Charles
            </a>{" "}
            and{" "}
            <a
              href="https://eaadonu.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ernest Adonu
            </a>
          </p>
          <p>
            Content provided by{" "}
            <a href="https://themealdb.com" target="_blank" rel="noreferrer noopener">
              themealdb.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
