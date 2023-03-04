import roadmap from "./image/Roadmap.png";

import styles from "./styles/Roadmap.module.css";

const Roadmap = () => {
  return (
    <section className={styles.roadmap}>
      <article>
        <p className={styles.roadmap__title}>NFT roadmap</p>
        <div className={styles.roadmap__lines}>
          <span className={styles.roadmap__line1}></span>
          <span className={styles.roadmap__line2}></span>
        </div>
        <p className={styles.roadmap__subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. leo ipsum
          <br />
          aliquet turpis elit elit natoque varius
        </p>
      </article>
      <article className={styles.roadmap_content}>
        <ul className={styles.roadmap_content__columns}>
          <li className={styles.roadmap_content__list}>
            <p className={styles.roadmap_content__title}>Legal Review</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </li>
          <li className={styles.roadmap_content__list}>
            <p className={styles.roadmap_content__title}>Platform Idea</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </li>
          <li className={styles.roadmap_content__list}>
            <p className={styles.roadmap_content__title}>Token Sale</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </li>
        </ul>
        <ul className={styles.roadmap_content__columns}>
          <li>
            <img src={roadmap} alt="" />
          </li>
        </ul>
        <ul className={styles.roadmap_content__columns}>
          <li className={styles.roadmap_content__list}>
            <p className={styles.roadmap_content__title}>ICO Conducting</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </li>
          <li className={styles.roadmap_content__list}>
            <p className={styles.roadmap_content__title}>Trade Enquiries</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </li>
          <li className={styles.roadmap_content__list}>
            <p className={styles.roadmap_content__title}>Project Idea</p>
            <p className={styles.roadmap_content__subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Natoque
              viverra eget.
            </p>
            <a className={styles.roadmap_content__link} href="#s">
              <span>read more</span>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Roadmap;
