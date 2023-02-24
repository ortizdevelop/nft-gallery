// Import Images
import footerLogo from "../img/footer/Group 215.png";
import footerBg from "../img/footer/bg.png";
import headphones from "../img/footer/Group.png";
import mail from "../img/footer/Group 153.png";
import geo from "../img/footer/Group 154.png";
import facebook from "../img/footer/facebook.png";
import instagram from "../img/footer/instagram.png";
import whatsapp from "../img/footer/whatsapp.png";
import twitter from "../img/footer/twitter.png";
import youtube from "../img/footer/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <img src={footerBg} alt="" />
      </div>
      <article className="footer-info">
        <ul className="footer-info__column">
          <li className="footer-info__list">
            <img src={footerLogo} alt="" />
          </li>
          <li className="footer-info__list">
            <p>
              which is the same as saying through shrinking from toil and pain.
              These cases are perfectly simple and easy to distinguish.
            </p>
          </li>
          <li className="footer-info__list list-content">
            <img src={headphones} alt="" />
            <p>+7 (495) 2222-0000-32</p>
          </li>
          <li className="footer-info__list list-content">
            <img src={mail} alt="" />
            <p>Hello.me@nft.com</p>
          </li>
          <li className="footer-info__list list-content">
            <img src={geo} alt="" />
            <p>00000 Collins Street West Victoria 66666 Australia</p>
          </li>
        </ul>
      </article>
      <article className="footer-explore">
        <ul className="footer-explore__column">
          <li className="footer-explore__list">
            <p className="list-title">Explore</p>
          </li>
          <li className="footer-explore__list list-content">
            <p>My Account</p>
          </li>
          <li className="footer-explore__list list-content">
            <p>Create Now</p>
          </li>
          <li className="footer-explore__list list-content">
            <p>List a Item</p>
          </li>
          <li className="footer-explore__list list-content">
            <p>Privacy Polocy</p>
          </li>
          <li className="footer-explore__list list-content">
            <p>FAQs</p>
          </li>
        </ul>
      </article>
      <article className="footer-marketplace">
        <ul className="footer-marketplace__column">
          <li className="footer-marketplace__list">
            <p className="list-title">Marketplece</p>
          </li>
          <li className="footer-marketplace__list list-content">
            <p>Art</p>
          </li>
          <li className="footer-marketplace__list list-content">
            <p>Photo</p>
          </li>
          <li className="footer-marketplace__list list-content">
            <p>Create a Store</p>
          </li>
          <li className="footer-marketplace__list list-content">
            <p>Start Selling</p>
          </li>
        </ul>
      </article>
      <article className="footer-newsletter">
        <ul className="footer-newsletter__column">
          <li className="footer-newsletter__list">
            <p className="list-title">Newsletter</p>
          </li>
          <li className="footer-newsletter__list">
            <img src={facebook} alt="" className="list-img" />
            <img src={instagram} alt="" className="list-img" />
            <img src={whatsapp} alt="" className="list-img" />
          </li>
          <li className="footer-newsletter__list">
            <img src={twitter} alt="" className="list-img" />
            <img src={youtube} alt="" className="list-img" />
          </li>
          <li className="footer-newsletter__list">
            <form action="" className="list-form">
              <input
                placeholder="Enter Your Email"
                type="email"
                className="list-input"
                required
              />
              <button type="submit" className="list-btn">
                Subcribe
              </button>
            </form>
          </li>
        </ul>
      </article>
      <p className="footer__copyright">© Copyright 2023. Powered by Ordainit</p>
    </footer>
  );
};

export default Footer;
