// Import libraries
import { motion } from "framer-motion";

//Import images
import avatar1 from "./image/avatar1.png";
import avatar2 from "./image/avatar2.png";
import avatar3 from "./image/avatar3.png";

import slider1 from "./image/slider1.png";
import slider2 from "./image/slider2.png";
import slider3 from "./image/slider3.png";

import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";
import img4 from "./image/img4.png";
import img5 from "./image/img5.png";
import img6 from "./image/img6.png";
import img7 from "./image/img7.png";
import img8 from "./image/img8.png";
import img9 from "./image/img9.png";
import img10 from "./image/img10.png";
import img11 from "./image/img11.png";

import vector from "./image/Vector.png";

// Import CSS
import "./styles/Collection.css";

const anim1 = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const anim1_1 = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const anim2 = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visible: (time) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const anim2_2 = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visible: (time) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: time * 0.2,
      duration: 0.65,
      ease: "easeInOut",
    },
  }),
};

const Collection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="collection"
      viewport={{
        amount: 0.2,
        once: true,
      }}
    >
      <article className="nft-collection">
        <motion.h1
          custom={1}
          variants={anim1}
          className="nft-collection__title app-title"
        >
          Collection
        </motion.h1>
        <motion.p
          custom={2}
          variants={anim1}
          className="nft-collection__name app-name"
        >
          NFT Collection <span>Art</span>
          <img src={vector} alt="" className="app-vector" />
        </motion.p>
        <ul className="nft-collection__columns app-column">
          <motion.li
            custom={3}
            variants={anim2}
            className="nft-collection__list app-list"
          >
            <motion.img
              src={slider1}
              custom={4.5}
              variants={anim1}
              alt=""
              className="nft-collection__slider app-slider"
            />
            <motion.img
              src={avatar1}
              custom={5}
              variants={anim1_1}
              alt=""
              className="nft-collection__avatar app-avatar"
            />
            <motion.p
              variants={anim2}
              custom={6}
              className="nft-collection__profile-name app-profile-name"
            >
              Alabama khan
            </motion.p>
            <motion.p
              variants={anim2}
              custom={7}
              className="nft-collection__bio app-bio"
            >
              which is the same as saying through shrinking from toil and pain.
              These cases are
            </motion.p>
            <motion.button
              custom={8}
              variants={anim2}
              type="submit"
              className="nft-collection__btn app-button"
            >
              +FOLLOW
            </motion.button>
          </motion.li>
          <motion.li
            custom={4}
            variants={anim2}
            className="nft-collection__list app-list"
          >
            <motion.img
              src={slider2}
              custom={5.5}
              variants={anim1}
              alt=""
              className="nft-collection__slider app-slider"
            />
            <motion.img
              src={avatar2}
              custom={6}
              variants={anim1_1}
              alt=""
              className="nft-collection__avatar app-avatar"
            />
            <motion.p
              variants={anim2}
              custom={7}
              className="nft-collection__profile-name app-profile-name"
            >
              Alabama khan
            </motion.p>
            <motion.p
              variants={anim2}
              custom={8}
              className="nft-collection__bio app-bio"
            >
              which is the same as saying through shrinking from toil and pain.
              These cases are
            </motion.p>
            <motion.button
              custom={9}
              variants={anim2}
              type="submit"
              className="nft-collection__btn app-button"
            >
              +FOLLOW
            </motion.button>
          </motion.li>
          <motion.li
            custom={5}
            variants={anim2}
            className="nft-collection__list app-list"
          >
            <motion.img
              src={slider3}
              custom={6.5}
              variants={anim1}
              alt=""
              className="nft-collection__slider app-slider"
            />
            <motion.img
              src={avatar3}
              custom={7}
              variants={anim1_1}
              alt=""
              className="nft-collection__avatar app-avatar"
            />
            <motion.p
              variants={anim2}
              custom={8}
              className="nft-collection__profile-name app-profile-name"
            >
              Alabama khan
            </motion.p>
            <motion.p
              variants={anim2}
              custom={9}
              className="nft-collection__bio app-bio"
            >
              which is the same as saying through shrinking from toil and pain.
              These cases are
            </motion.p>
            <motion.button
              custom={10}
              variants={anim2}
              type="submit"
              className="nft-collection__btn app-button"
            >
              +FOLLOW
            </motion.button>
          </motion.li>
        </ul>
        <motion.div
          custom={1}
          variants={anim1_1}
          whileTap={{
            translateY: 2,
          }}
          className="nft-collection__link app-link"
        >
          <a href="#s">
            <span>View All Category</span>
          </a>
        </motion.div>
      </article>
      <article className="nft-art">
        <motion.p
          custom={1}
          variants={anim1}
          className="nft-art__name app-name"
        >
          NFT art, Domain name, Stachu, Collection Gallery
        </motion.p>
        <motion.p
          custom={3}
          variants={anim1}
          className="nft-art__subtitile app-subtitle"
        >
          It has survived not only five centuries, but also the leap into <br />
          electronic typesetting, remaining essentially unchanged
        </motion.p>
        <ul className="nft-art__columns app-column">
          <li className="nft-art__list app-list">
            <motion.img
              variants={anim2_2}
              custom={1}
              src={img1}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={5}
              src={img2}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={11}
              src={img3}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={8}
              src={img4}
              alt=""
              className="nft-art__image app-img"
            />
          </li>
          <li className="nft-art__list app-list">
            <motion.img
              variants={anim2_2}
              custom={3}
              src={img5}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={7}
              src={img6}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={2}
              src={img7}
              alt=""
              className="nft-art__image app-img"
            />
          </li>
          <li className="nft-art__list app-list">
            <motion.img
              variants={anim2_2}
              custom={6}
              src={img8}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={5}
              src={img9}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={8}
              src={img10}
              alt=""
              className="nft-art__image app-img"
            />
            <motion.img
              variants={anim2_2}
              custom={4.5}
              src={img11}
              alt=""
              className="nft-art__image app-img"
            />
          </li>
        </ul>
      </article>
    </motion.div>
  );
};

export default Collection;
