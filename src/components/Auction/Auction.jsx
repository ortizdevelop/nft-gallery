import { motion } from "framer-motion";

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

const animVar1 = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const animVar1_1 = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const animVar2 = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (time) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const animVar3 = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (time) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const animVar3_1 = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (time) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const Auction = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
    >
      <article className={styles.auction}>
        <motion.p
          custom={1}
          variants={animVar1_1}
          className={styles.auction__title}
        >
          Live Auction
        </motion.p>
        <motion.p
          custom={2}
          variants={animVar1}
          className={styles.auction__subtitle}
        >
          NFT Live Auction
        </motion.p>
        <ul className={styles.auction_columns}>
          <motion.li
            variants={animVar2}
            custom={3}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={4}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={5}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
        </ul>
        <ul className={styles.auction_columns}>
          <motion.li
            variants={animVar2}
            custom={6}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={7}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={8}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
        </ul>
        <ul className={styles.auction_columns}>
          <motion.li
            variants={animVar2}
            custom={9}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={10}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={11}
            className={styles.auction_columns__list}
          >
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
          </motion.li>
        </ul>
      </article>
    </motion.section>
  );
};

export default Auction;
