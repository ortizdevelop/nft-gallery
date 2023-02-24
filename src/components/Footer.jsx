// Import Images
import footerLogo from "../img/footer/Group 215.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <img src="" alt="" />
      </div>
      <article className="footer-info">
        <ul className="footer-info__column">
          <li className="footer-info__list">
            <img src={footerLogo} alt="" />
          </li>
          <li className="footer-info__list">
            <p></p>
          </li>
          <li className="footer-info__list">
            <img src="" alt="" />
            <p></p>
          </li>
          <li className="footer-info__list">
            <img src="" alt="" />
            <p></p>
          </li>
          <li className="footer-info__list">
            <img src="" alt="" />
            <p></p>
          </li>
        </ul>
      </article>
      <article className="footer-explore">
        <ul className="footer-explore__column">
          <li className="footer-explore__list">
            <p className="list-title"></p>
          </li>
          <li className="footer-explore__list">
            <p></p>
          </li>
          <li className="footer-explore__list">
            <p></p>
          </li>
          <li className="footer-explore__list">
            <p></p>
          </li>
          <li className="footer-explore__list">
            <p></p>
          </li>
          <li className="footer-explore__list">
            <p></p>
          </li>
        </ul>
      </article>
      <article className="footer-marketplace">
        <ul className="footer-marketplace__column">
          <li className="footer-marketplace__list">
            <p className="list-title"></p>
          </li>
          <li className="footer-marketplace__list">
            <p></p>
          </li>
          <li className="footer-marketplace__list">
            <p></p>
          </li>
          <li className="footer-marketplace__list">
            <p></p>
          </li>
          <li className="footer-marketplace__list">
            <p></p>
          </li>
        </ul>
      </article>
      <article className="footer-newsletter">
        <ul className="footer-newsletter__column">
          <li className="footer-newsletter__list">
            <p className="list-title"></p>
          </li>
          <li className="footer-newsletter__list">
            <img src="" alt="" className="list-img" />
            <img src="" alt="" className="list-img" />
            <img src="" alt="" className="list-img" />
          </li>
          <li className="footer-newsletter__list">
            <img src="" alt="" className="list-img" />
            <img src="" alt="" className="list-img" />
          </li>
          <li className="footer-newsletter__list">
            <form action="" className="list-form">
              <input type="text" className="list-input" />
              <button type="submit" className="list-btn"></button>
            </form>
          </li>
        </ul>
      </article>
      <p className="footer__copyright">© Copyright 2023. Powered by Ordainit</p>
    </footer>
  );
};

export default Footer;
