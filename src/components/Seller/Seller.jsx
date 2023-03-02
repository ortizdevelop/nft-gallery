import avatar1 from "./image/avatar1.png";
import avatar2 from "./image/avatar2.png";
import avatar3 from "./image/avatar3.png";
import avatar4 from "./image/avatar4.png";
import avatar5 from "./image/avatar5.png";
import avatar6 from "./image/avatar6.png";
import avatar7 from "./image/avatar7.png";
import avatar8 from "./image/avatar8.png";
import avatar9 from "./image/avatar9.png";

import styles from "./styles/Seller.module.css";

const Seller = (props) => {
  return (
    <section>
      <article>
        <p className={styles.seller__title}>Seller</p>
        <p className={styles.seller__subtitle}>
          NFT Best Seller <span>Last 7 Day</span>
        </p>
        <p className={styles.seller__desc}>
          It has survived not only five centuries, but also the leap into
        </p>
      </article>
      <article>
        <ul className={styles.seller_columns}>
          <li className={styles.seller_columns__list}>
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
          </li>
          <li className={styles.seller_columns__list}>
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
          </li>
          <li className={styles.seller_columns__list}>
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
          </li>
        </ul>
        <ul className={styles.seller_columns}>
          <li className={styles.seller_columns__list}>
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
          </li>
          <li className={styles.seller_columns__list}>
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
          </li>
          <li className={styles.seller_columns__list}>
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
          </li>
        </ul>
        <ul className={styles.seller_columns}>
          <li className={styles.seller_columns__list}>
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
          </li>
          <li className={styles.seller_columns__list}>
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
          </li>
          <li className={styles.seller_columns__list}>
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
          </li>
        </ul>
      </article>
      <article>
        <p></p>
        <div>
          <ul>
            <li>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <p></p>
              <p></p>
            </li>
          </ul>
          <img src="" alt="" />
        </div>
      </article>
    </section>
  );
};

export default Seller;
