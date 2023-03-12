import { motion } from "framer-motion";

// Import images
import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";
import img4 from "./image/img4.png";
import img5 from "./image/img5.png";
import img6 from "./image/img6.png";

import bg from "./image/bg1.png";

// Import CSS
import styles from "./styles/Marketplace.module.css";

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
    scale: 0.95,
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

const Marketplace = (props) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className={styles.marketplace}
    >
      <motion.p
        custom={1}
        variants={animVar1_1}
        className={styles.marketplace__title}
      >
        NFT Marketplace
      </motion.p>
      <motion.p
        custom={2}
        variants={animVar1}
        className={styles.marketplace__subtitle}
      >
        NFT all Category
      </motion.p>
      <article className={styles.marketplace_category}>
        <ul className={styles.marketplace_category__column}>
          <motion.li
            custom={1}
            variants={animVar2}
            className={styles.marketplace_category__list}
          >
            <motion.img
              className={styles.marketplace_category__image}
              src={img1}
              alt=""
            />
            <div className={styles.marketplace_category__info_link}>
              <div className={styles.marketplace_category__name_and_item}>
                <p className={styles.marketplace_category__category}>Art</p>
                <p className={styles.marketplace_category__item}>125 Item</p>
              </div>
              <div>
                <a href="#s" className={styles.marketplace_category__link}>
                  <span>View All</span>
                </a>
              </div>
            </div>
          </motion.li>
          <motion.li
            custom={2}
            variants={animVar2}
            className={styles.marketplace_category__list}
          >
            <img
              className={styles.marketplace_category__image}
              src={img2}
              alt=""
            />
            <div className={styles.marketplace_category__info_link}>
              <div className={styles.marketplace_category__name_and_item}>
                <p className={styles.marketplace_category__category}>Collect</p>
                <p className={styles.marketplace_category__item}>325 Item</p>
              </div>
              <div>
                <a href="#s" className={styles.marketplace_category__link}>
                  <span>View All</span>
                </a>
              </div>
            </div>
          </motion.li>
          <motion.li
            custom={3}
            variants={animVar2}
            className={styles.marketplace_category__list}
          >
            <img
              className={styles.marketplace_category__image}
              src={img3}
              alt=""
            />
            <div className={styles.marketplace_category__info_link}>
              <div className={styles.marketplace_category__name_and_item}>
                <p className={styles.marketplace_category__category}>Photos</p>
                <p className={styles.marketplace_category__item}>3250 Item</p>
              </div>
              <div>
                <a href="#s" className={styles.marketplace_category__link}>
                  <span>View All</span>
                </a>
              </div>
            </div>
          </motion.li>
        </ul>
        <ul className={styles.marketplace_category__column}>
          <motion.li
            custom={4}
            variants={animVar2}
            className={styles.marketplace_category__list}
          >
            <img
              className={styles.marketplace_category__image}
              src={img4}
              alt=""
            />
            <div className={styles.marketplace_category__info_link}>
              <div className={styles.marketplace_category__name_and_item}>
                <p className={styles.marketplace_category__category}>3D Art</p>
                <p className={styles.marketplace_category__item}>3562 Item</p>
              </div>
              <div>
                <a href="#s" className={styles.marketplace_category__link}>
                  <span>View All</span>
                </a>
              </div>
            </div>
          </motion.li>
          <motion.li
            custom={5}
            variants={animVar2}
            className={styles.marketplace_category__list}
          >
            <img
              className={styles.marketplace_category__image}
              src={img5}
              alt=""
            />
            <div className={styles.marketplace_category__info_link}>
              <div className={styles.marketplace_category__name_and_item}>
                <p className={styles.marketplace_category__category}>Stachu</p>
                <p className={styles.marketplace_category__item}>325 Item</p>
              </div>
              <div>
                <a href="#s" className={styles.marketplace_category__link}>
                  <span>View All</span>
                </a>
              </div>
            </div>
          </motion.li>
          <motion.li
            custom={6}
            variants={animVar2}
            className={styles.marketplace_category__list}
          >
            <img
              className={styles.marketplace_category__image}
              src={img6}
              alt=""
            />
            <div className={styles.marketplace_category__info_link}>
              <div className={styles.marketplace_category__name_and_item}>
                <p className={styles.marketplace_category__category}>2D</p>
                <p className={styles.marketplace_category__item}>125 item</p>
              </div>
              <div>
                <a href="#s" className={styles.marketplace_category__link}>
                  <span>View All</span>
                </a>
              </div>
            </div>
          </motion.li>
        </ul>
      </article>
      <motion.a
        custom={2}
        variants={animVar2}
        href="#s"
        className={styles.marketplace__btn}
      >
        <span>View All Category</span>
      </motion.a>
      <article className={styles.large_market}>
        <motion.p
          custom={1}
          variants={animVar1_1}
          className={styles.large_market__title}
        >
          NFT Marketplace
        </motion.p>
        <motion.p
          custom={2}
          variants={animVar1}
          className={styles.large_market__subtitle}
        >
          The Largest NFT MarketPlace
        </motion.p>
        <ul className={styles.large_market__column}>
          <motion.img
            custom={3}
            variants={animVar3}
            className={styles.large_market__image}
            src={bg}
            alt=""
          />
          <div>
            <motion.li
              variants={animVar3_1}
              custom={4}
              className={styles.large_market__list}
            >
              <p className={styles.large_market__text}>
                written in. This book is a treatise on the theory of ethics very
                popular during the Renaissance.The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet
              </p>
            </motion.li>
            <motion.li
              variants={animVar3_1}
              custom={5}
              className={styles.large_market__list}
            >
              <p className={styles.large_market__text}>
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc
              </p>
            </motion.li>
            <motion.li
              variants={animVar3_1}
              custom={6}
              className={styles.large_market__list}
            >
              <p className={styles.large_market__list_text}>
                except to obtain some advantage from it?
              </p>
            </motion.li>
            <motion.li
              variants={animVar3_1}
              custom={7}
              className={styles.large_market__list}
            >
              <p className={styles.large_market__list_text}>
                Nam libero tempore, cum soluta nobis est eligendi optio
                cumque...
              </p>
            </motion.li>
            <motion.li
              variants={animVar3_1}
              custom={8}
              className={styles.large_market__list}
            >
              <p className={styles.large_market__list_text}>
                choice is untrammelled and when nothing prevents our being.
              </p>
            </motion.li>
            <motion.li
              variants={animVar3_1}
              custom={9}
              className={styles.large_market__list}
            >
              <p className={styles.large_market__list_text}>
                which is the same as saying through shrinking from toil and pain
              </p>
            </motion.li>
            <motion.li
              variants={animVar3_1}
              custom={10}
              className={styles.large_market__list}
            >
              <p className={styles.large_market__list_text}>
                except to obtain some advantage from it?
              </p>
            </motion.li>
            <motion.a
              className={styles.large_market__btn}
              custom={11}
              variants={animVar2}
              href="#s"
            >
              <span>Read More</span>
            </motion.a>
          </div>
        </ul>
      </article>
    </motion.section>
  );
};

export default Marketplace;
