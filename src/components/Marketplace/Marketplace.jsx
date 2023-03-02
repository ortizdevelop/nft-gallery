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

const Marketplace = (props) => {
  return (
    <section className={styles.marketplace}>
      <p className={styles.marketplace__title}>NFT Marketplace</p>
      <p className={styles.marketplace__subtitle}>NFT all Category</p>
      <article className={styles.marketplace_category}>
        <ul className={styles.marketplace_category__column}>
          <li className={styles.marketplace_category__list}>
            <img
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
          </li>
          <li className={styles.marketplace_category__list}>
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
          </li>
          <li className={styles.marketplace_category__list}>
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
          </li>
        </ul>
        <ul className={styles.marketplace_category__column}>
          <li className={styles.marketplace_category__list}>
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
          </li>
          <li className={styles.marketplace_category__list}>
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
          </li>
          <li className={styles.marketplace_category__list}>
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
          </li>
        </ul>
      </article>
      <a href="#s" className={styles.marketplace__btn}>
        <span>View All Category</span>
      </a>
      <article className={styles.large_market}>
        <p className={styles.large_market__title}>NFT Marketplace</p>
        <p className={styles.large_market__subtitle}>
          The Largest NFT MarketPlace
        </p>
        <ul className={styles.large_market__column}>
          <img className={styles.large_market__image} src={bg} alt="" />
          <div>
            <li className={styles.large_market__list}>
              <p className={styles.large_market__text}>
                written in. This book is a treatise on the theory of ethics very
                popular during the Renaissance.The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet
              </p>
            </li>
            <li className={styles.large_market__list}>
              <p className={styles.large_market__text}>
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc
              </p>
            </li>
            <li className={styles.large_market__list}>
              <p className={styles.large_market__list_text}>
                except to obtain some advantage from it?
              </p>
            </li>
            <li className={styles.large_market__list}>
              <p className={styles.large_market__list_text}>
                Nam libero tempore, cum soluta nobis est eligendi optio
                cumque...
              </p>
            </li>
            <li className={styles.large_market__list}>
              <p className={styles.large_market__list_text}>
                choice is untrammelled and when nothing prevents our being.
              </p>
            </li>
            <li className={styles.large_market__list}>
              <p className={styles.large_market__list_text}>
                which is the same as saying through shrinking from toil and pain
              </p>
            </li>
            <li className={styles.large_market__list}>
              <p className={styles.large_market__list_text}>
                except to obtain some advantage from it?
              </p>
            </li>
            <a className={styles.large_market__btn} href="#s">
              <span>Read More</span>
            </a>
          </div>
        </ul>
      </article>
    </section>
  );
};

export default Marketplace;
