// Import libraries
import { motion } from "framer-motion";

// Import images
import headerLogo from "../img/header/logo.png";
import { ReactComponent as Pinterest } from "../img/header/Pinterest.svg";
import { ReactComponent as WW } from "../img/header/ww.svg";
import { ReactComponent as PBox } from "../img/header/p.svg";
import { ReactComponent as Triangle } from "../img/header/triangle.svg";
import { ReactComponent as Wiki } from "../img/header/wiki.svg";
import Bg from "../img/header/header-bg.svg";

// Import components

const navLogo = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 0.65,
      ease: "easeInOut",
    },
  }),
};

const navLink = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.3,
      duration: 0.65,
      ease: "easeInOut",
    },
  }),
};

const navBtn = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: (time) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 0.45,
      ease: "easeInOut",
    },
  }),
};

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      className="header"
      viewport={{
        amont: 0.2,
        once: true,
      }}
    >
      <div className="header__bg">
        <img src={Bg} alt="" />
      </div>
      <nav className="navbar">
        <motion.div
          transition={{
            duration: 0.65,
            ease: "easeInOut",
          }}
          variants={navLogo}
          className="header__logo"
        >
          <img src={headerLogo} alt="" />
          <p>NFT Gallery</p>
        </motion.div>
        <ul className="navbar__column">
          <motion.li custom={1} variants={navLink} className="navbar__list">
            <a href="#">Home</a>
            <span className="navbar__line"></span>
          </motion.li>
          <motion.li custom={2} variants={navLink} className="navbar__list">
            <a href="#">Activity</a>
            <span className="navbar__line"></span>
          </motion.li>
          <motion.li custom={3} variants={navLink} className="navbar__list">
            <a href="#">Category</a>
            <span className="navbar__line"></span>
          </motion.li>
          <motion.li custom={4} variants={navLink} className="navbar__list">
            <a href="#">Blogs</a>
            <span className="navbar__line"></span>
          </motion.li>
          <motion.li custom={5} variants={navLink} className="navbar__list">
            <a href="#">Browser</a>
            <span className="navbar__line"></span>
          </motion.li>
        </ul>
        <motion.div custom={6} variants={navBtn}>
          <button className="navbar__btn header__btn">Start Collecting</button>
        </motion.div>
      </nav>
      <div className="header__content">
        <motion.p custom={7} variants={navLogo} className="header__title">
          Explore Thousands Of Digital <br /> <span>Art</span> And Collectibles
        </motion.p>
        <motion.p custom={8} variants={navLink} className="header__subtitle">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, <br /> remaining essentially unchanged It was
          popularised in the 1960s
        </motion.p>
        <div className="header__buttons">
          <motion.button
            whileTap={{
              translateY: 2,
            }}
            custom={9}
            variants={navBtn}
            className="header__btn"
          >
            Explore Now
          </motion.button>
          <motion.button
            whileTap={{
              translateY: 2,
            }}
            custom={10}
            variants={navBtn}
            className="header__btn"
          >
            Create Account
          </motion.button>
        </div>
        <div className="header__companies">
          <motion.ul variants={navLink} custom={11} className="header__columns">
            <motion.li
              whileHover={{
                translateY: -22,
                duration: 0.65,
                ease: "easeInOut",
              }}
              variants={navBtn}
              custom={12}
              className="header__list"
            >
              <Pinterest className="header__images" />
            </motion.li>
            <motion.li
              whileHover={{
                translateY: -22,
                duration: 0.65,
                ease: "easeInOut",
              }}
              variants={navBtn}
              custom={13}
              className="header__list"
            >
              <WW className="header__images" />
            </motion.li>
            <motion.li
              whileHover={{
                translateY: -22,
                duration: 0.65,
                ease: "easeInOut",
              }}
              variants={navBtn}
              custom={14}
              className="header__list"
            >
              <PBox className="header__images" />
            </motion.li>
            <motion.li
              whileHover={{
                translateY: -22,
                duration: 0.65,
                ease: "easeInOut",
              }}
              variants={navBtn}
              custom={15}
              className="header__list"
            >
              <Triangle className="header__images" />
            </motion.li>
            <motion.li
              whileHover={{
                translateY: -22,
                duration: 0.65,
                ease: "easeInOut",
              }}
              variants={navBtn}
              custom={16}
              className="header__list"
            >
              <Wiki className="header__images" />
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
