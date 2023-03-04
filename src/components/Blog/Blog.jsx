import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";

import styles from "./styles/Blog.module.css";

function Blog() {
  return (
    <section className={styles.blog}>
      <article>
        <p className={styles.blog__title}>Our Latest Blog</p>
        <p className={styles.blog__subtitle}>
          It has survived not only five centuries, but also the
        </p>
      </article>
      <article className={styles.blog_news}>
        <ul className={styles.blog_news__column}>
          <li className={styles.blog_news__list}>
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
          </li>
          <li className={styles.blog_news__list}>
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
          </li>
          <li className={styles.blog_news__list}>
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
          </li>
        </ul>
        <div className={styles.blog_slider}>
          <span className={styles.blog_slider__button}></span>
          <span className={styles.blog_slider__button}></span>
        </div>
      </article>
    </section>
  );
}

export default Blog;
