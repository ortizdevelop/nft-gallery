import { motion } from "framer-motion";

import roadmap from "./image/Roadmap.png";

import styles from "./styles/Roadmap.module.css";

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

const animVar2_1 = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (time) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: time * 0.4,
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

const Roadmap = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className={styles.roadmap}
    >
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
        }}
      >
        <motion.p
          custom={1}
          variants={animVar1_1}
          className={styles.roadmap__title}
        >
          NFT roadmap
        </motion.p>
        <div className={styles.roadmap__lines}>
          <motion.span
            custom={2}
            variants={animVar2}
            className={styles.roadmap__line1}
          ></motion.span>
          <motion.span
            custom={3}
            variants={animVar2}
            className={styles.roadmap__line2}
          ></motion.span>
        </div>
        <motion.p
          custom={4}
          variants={animVar1}
          className={styles.roadmap__subtitle}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. leo ipsum
          <br />
          aliquet turpis elit elit natoque varius
        </motion.p>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
        }}
        className={styles.roadmap_content}
      >
        <ul className={styles.roadmap_content__columns}>
          <motion.li
            custom={7}
            variants={animVar2_1}
            className={styles.roadmap_content__list}
          >
            <p className={styles.roadmap_content__title}>Legal Review</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </motion.li>
          <motion.li
            custom={9}
            variants={animVar2_1}
            className={styles.roadmap_content__list}
          >
            <p className={styles.roadmap_content__title}>Platform Idea</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </motion.li>
          <motion.li
            custom={11}
            variants={animVar2_1}
            className={styles.roadmap_content__list}
          >
            <p className={styles.roadmap_content__title}>Token Sale</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </motion.li>
        </ul>
        <ul className={styles.roadmap_content__columns}>
          <motion.li custom={5} variants={animVar2}>
            <img src={roadmap} alt="" />
          </motion.li>
        </ul>
        <ul className={styles.roadmap_content__columns}>
          <motion.li
            custom={6}
            variants={animVar2_1}
            className={styles.roadmap_content__list}
          >
            <p className={styles.roadmap_content__title}>ICO Conducting</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </motion.li>
          <motion.li
            custom={8}
            variants={animVar2_1}
            className={styles.roadmap_content__list}
          >
            <p className={styles.roadmap_content__title}>Trade Enquiries</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </motion.li>
          <motion.li
            custom={10}
            variants={animVar2_1}
            className={styles.roadmap_content__list}
          >
            <p className={styles.roadmap_content__title}>Project Idea</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </motion.li>
        </ul>
      </motion.article>
    </motion.section>
  );
};

export default Roadmap;
