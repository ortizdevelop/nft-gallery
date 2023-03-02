import styles from "./Auction.module.css";

import banner1 from "./image/banner1.png";
import banner2 from "./image/banner2.png";
import banner3 from "./image/banner3.png";
import banner4 from "./image/banner4.png";
import banner5 from "./image/banner5.png";
import banner6 from "./image/banner6.png";
import banner7 from "./image/banner7.png";
import banner8 from "./image/banner8.png";
import banner9 from "./image/banner9.png";

import product from "./image/product.png";
import like from "./image/like.png";
import avatar from "./image/avatar.png";

const Auction = () => {
  return (
    <section>
      <article className={styles.auction}>
        <p className={styles.auction__title}>Live Auction</p>
        <p className={styles.auction__subtitle}>NFT Live Auction</p>
        <ul className={styles.auction_columns}>
          <li className={styles.auction_columns__list}>
            <img src={banner1} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
          <li className={styles.auction_columns__list}>
            <img src={banner2} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
          <li className={styles.auction_columns__list}>
            <img src={banner3} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
        </ul>
        <ul className={styles.auction_columns}>
          <li className={styles.auction_columns__list}>
            <img src={banner4} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
          <li className={styles.auction_columns__list}>
            <img src={banner5} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
          <li className={styles.auction_columns__list}>
            <img src={banner6} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
        </ul>
        <ul className={styles.auction_columns}>
          <li className={styles.auction_columns__list}>
            <img src={banner7} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
          <li className={styles.auction_columns__list}>
            <img src={banner8} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
          <li className={styles.auction_columns__list}>
            <img src={banner9} alt="" />
            <div className={styles.auction_columns__product_live}>
              <img src={product} alt="" />
              <img src={like} alt="" />
            </div>
            <div className={styles.auction_columns__profile}>
              <img src={avatar} alt="" />
              <p className={styles.name}>amitab Khondokar</p>
              <p>Current Bid</p>
            </div>
            <div className={styles.auction_columns__ETH}>
              <p className={styles.profile_link}>@amitabKhondokar</p>
              <p className={styles.crypto}>0.25 ETH</p>
            </div>
            <button className={styles.button}>Price Bid</button>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Auction;
