import { motion } from "framer-motion";

import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";

import styles from "./styles/Blog.module.css";

function Blog() {
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className={styles.blog}
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
          className={styles.blog__title}
        >
          Our Latest Blog
        </motion.p>
        <motion.p
          custom={2}
          variants={animVar1}
          className={styles.blog__subtitle}
        >
          It has survived not only five centuries, but also the
        </motion.p>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
        }}
        className={styles.blog_news}
      >
        <ul className={styles.blog_news__column}>
          <motion.li
            variants={animVar2}
            custom={3}
            className={styles.blog_news__list}
          >
            <img src={img1} alt="" />
            <p className={styles.blog_news__data}>20 Agu 2022</p>
            <p className={styles.blog_news__title}>
              Mindfulness Activities for Kids & Toddlers with NFT
            </p>
            <p className={styles.blog_news__subtitle}>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like ...
            </p>
            <button className={styles.blog_news__button}>Read More</button>
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={4}
            className={styles.blog_news__list}
          >
            <img src={img2} alt="" />
            <p className={styles.blog_news__data}>20 Agu 2022</p>
            <p className={styles.blog_news__title}>
              Save Thousands Of Lives Through This NFT
            </p>
            <p className={styles.blog_news__subtitle}>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like ...
            </p>
            <button className={styles.blog_news__button}>Read More</button>
          </motion.li>
          <motion.li
            variants={animVar2}
            custom={5}
            className={styles.blog_news__list}
          >
            <img src={img3} alt="" />
            <p className={styles.blog_news__data}>20 Agu 2022</p>
            <p className={styles.blog_news__title}>
              Mindfulness Activities for Kids & Toddlers with NFT
            </p>
            <p className={styles.blog_news__subtitle}>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like ...
            </p>
            <button className={styles.blog_news__button}>Read More</button>
          </motion.li>
        </ul>
        <motion.div
          variants={animVar2}
          custom={7.5}
          className={styles.blog_slider}
        >
          <span className={styles.blog_slider__button}></span>
          <span className={styles.blog_slider__button}></span>
        </motion.div>
      </motion.article>
    </motion.section>
  );
}

export default Blog;
