import { motion } from "framer-motion";

import avatar1 from "./image/avatar1.png";
import avatar2 from "./image/avatar2.png";
import avatar3 from "./image/avatar3.png";
import avatar4 from "./image/avatar4.png";
import avatar5 from "./image/avatar5.png";
import avatar6 from "./image/avatar6.png";
import avatar7 from "./image/avatar7.png";
import avatar8 from "./image/avatar8.png";
import avatar9 from "./image/avatar9.png";

import wallet from "./image/wallet.png";
import notepad from "./image/notepad.png";
import collect from "./image/collection.png";
import nft from "./image/NFT.png";
import bg from "./image/bg.png";

import styles from "./styles/Seller.module.css";

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

const Seller = (props) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
    >
      <article>
        <motion.p
          custom={1}
          variants={animVar1_1}
          className={styles.seller__title}
        >
          Seller
        </motion.p>
        <motion.p
          custom={2}
          variants={animVar2}
          className={styles.seller__subtitle}
        >
          NFT Best Seller <span>Last 7 Day</span>
        </motion.p>
        <motion.p
          custom={3}
          variants={animVar1}
          className={styles.seller__desc}
        >
          It has survived not only five centuries, but also the leap into
        </motion.p>
      </article>
      <article>
        <ul className={styles.seller_columns}>
          <motion.li
            custom={4}
            variants={animVar3}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar1} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>01</p>
            </div>
          </motion.li>
          <motion.li
            custom={5}
            variants={animVar2}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar2} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>02</p>
            </div>
          </motion.li>
          <motion.li
            custom={6}
            variants={animVar3_1}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar3} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>03</p>
            </div>
          </motion.li>
        </ul>
        <ul className={styles.seller_columns}>
          <motion.li
            custom={7}
            variants={animVar3}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar4} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>04</p>
            </div>
          </motion.li>
          <motion.li
            custom={8}
            variants={animVar2}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar5} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>05</p>
            </div>
          </motion.li>
          <motion.li
            custom={9}
            variants={animVar3_1}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar6} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>06</p>
            </div>
          </motion.li>
        </ul>
        <ul className={styles.seller_columns}>
          <motion.li
            custom={10}
            variants={animVar3}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar7} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>07</p>
            </div>
          </motion.li>
          <motion.li
            custom={11}
            variants={animVar2}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar8} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>08</p>
            </div>
          </motion.li>
          <motion.li
            custom={12}
            variants={animVar3_1}
            className={styles.seller_columns__list}
          >
            <div className={styles.seller_columns__image}>
              <img src={avatar9} alt="" />
            </div>
            <div>
              <p className={styles.seller_columns__name}>Asiana Sharma</p>
              <p className={styles.seller_columns__media}>@asianasharma</p>
              <p className={styles.seller_columns__item}>235 Item</p>
            </div>
            <div className={styles.seller_columns__part}>
              <p>09</p>
            </div>
          </motion.li>
        </ul>
      </article>
      <article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
        }}
        className={styles.sell}
      >
        <motion.p
          custom={1}
          variants={animVar1_1}
          className={styles.sell__title}
        >
          Creat And Sell Your NFTs
        </motion.p>
        <div className={styles.sell__content}>
          <ul className={styles.sell__column}>
            <motion.li
              custom={2}
              variants={animVar2}
              className={styles.sell__list}
            >
              <img className={styles.sell__image} src={wallet} alt="" />
              <p className={styles.sell__subtitle}>Setup Your Wallet</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </motion.li>
            <motion.li
              custom={3}
              variants={animVar2}
              className={styles.sell__list}
            >
              <img className={styles.sell__image} src={notepad} alt="" />
              <p className={styles.sell__subtitle}>For Sale Listing</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </motion.li>
            <motion.li
              custom={4}
              variants={animVar2}
              className={styles.sell__list}
            >
              <img className={styles.sell__image} src={collect} alt="" />
              <p className={styles.sell__subtitle}>Creat Your Collection</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </motion.li>
            <motion.li
              custom={5}
              variants={animVar2}
              className={styles.sell__list}
            >
              <img className={styles.sell__image} src={nft} alt="" />
              <p className={styles.sell__subtitle}>Add Your NFT</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </motion.li>
          </ul>
          <motion.img
            custom={6}
            variants={animVar3_1}
            className={styles.sell__bg}
            src={bg}
            alt=""
          />
        </div>
      </article>
    </motion.section>
  );
};

export default Seller;
