import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <a href="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="footer__image"
            height={48}
            width={48}
          />
        </a>
        <div className="footer__content">
          <p>
            Built by <a href="https://okoyecharles.com">Okoye Charles</a> and{" "}
            <a href="https://eaadonu.vercel.app">Ernest Adonu</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
