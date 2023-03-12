import { motion } from "framer-motion";

import avatar from "./images/avatar.png";
import star from "./images/star.png";
import pic from "./images/pic.png";

import styles from "./styles/Users.module.css";
import { useState } from "react";

function Users() {
  const [activeButton, setActiveButton] = useState(null);

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
      className={styles.users}
    >
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
        }}
      >
        <motion.p
          variants={animVar1_1}
          custom={1}
          className={styles.users__title}
        >
          Hear From Our Happy Users
        </motion.p>
        <motion.p
          variants={animVar1}
          custom={2}
          className={styles.users__subtitle}
        >
          It has survived not only five centuries, but also the leap into <br />
          electronic typesetting, remaining essentially unchanged
        </motion.p>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
        }}
        className={styles.users_slider}
      >
        <motion.div
          custom={3}
          variants={animVar2}
          className={styles.users_slider__profile}
        >
          <div className={styles.users_slider__profile_info}>
            <motion.img
              custom={4}
              variants={animVar1_1}
              className={styles.users_slider__avatar}
              src={avatar}
              alt=""
            />
            <ul className={styles.users_slider__column}>
              <motion.li
                custom={5}
                variants={animVar3}
                className={styles.users_slider__list}
              >
                <p className={styles.users_slider__name}>Alamin Khan</p>
              </motion.li>
              <motion.li
                custom={6}
                variants={animVar3_1}
                className={styles.users_slider__list}
              >
                <p className={styles.users_slider__post}>Art Director</p>
              </motion.li>
              <li className={styles.users_slider__list}>
                <motion.span
                  custom={7}
                  variants={animVar2}
                  className={styles.users_slider__rating}
                ></motion.span>
                <motion.span
                  custom={8}
                  variants={animVar2}
                  className={styles.users_slider__rating}
                ></motion.span>
                <motion.span
                  custom={9}
                  variants={animVar2}
                  className={styles.users_slider__rating}
                ></motion.span>
                <motion.span
                  custom={10}
                  variants={animVar2}
                  className={styles.users_slider__rating}
                ></motion.span>
                <motion.span
                  custom={11}
                  variants={animVar2}
                  className={styles.users_slider__rating}
                ></motion.span>
              </li>
            </ul>
          </div>
          <motion.p
            custom={12}
            variants={animVar3}
            className={styles.users_slider__description}
          >
            It has survived not only five centuries, but also the leap into{" "}
            <br />
            electronic typesetting, remaining essentially unchanged. It <br />
            popularised in the 1960s with the release of Letraset containing{" "}
            <br />
            Lorem Ipsum passages, and more recently with.
          </motion.p>
        </motion.div>
        <motion.div
          custom={3}
          variants={animVar2}
          className={styles.users_slider__pic}
        >
          <img src={pic} alt="" />
        </motion.div>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
        }}
        variants={animVar2}
        custom={1}
        className={styles.slider_buttons}
      >
        <button
          className={
            activeButton === 0
              ? styles.users_slider_btn_active
              : styles.users_slider_btn
          }
          onClick={() => setActiveButton(0)}
        ></button>
        <button
          className={
            activeButton === 1
              ? styles.users_slider_btn_active
              : styles.users_slider_btn
          }
          onClick={() => setActiveButton(1)}
        ></button>
        <button
          className={
            activeButton === 2
              ? styles.users_slider_btn_active
              : styles.users_slider_btn
          }
          onClick={() => setActiveButton(2)}
        ></button>
        <button
          className={
            activeButton === 3
              ? styles.users_slider_btn_active
              : styles.users_slider_btn
          }
          onClick={() => setActiveButton(3)}
        ></button>
      </motion.article>
    </motion.section>
  );
}

export default Users;
