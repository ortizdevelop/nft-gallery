import avatar1 from "./image/avatar1.png";
import avatar2 from "./image/avatar2.png";
import avatar3 from "./image/avatar3.png";
import avatar4 from "./image/avatar4.png";
import avatar5 from "./image/avatar5.png";
import avatar6 from "./image/avatar6.png";
import avatar7 from "./image/avatar7.png";
import avatar8 from "./image/avatar8.png";
import avatar9 from "./image/avatar9.png";

import wallet from "./image/wallet.png";
import notepad from "./image/notepad.png";
import collect from "./image/collection.png";
import nft from "./image/NFT.png";
import bg from "./image/bg.png";

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
      <article className={styles.sell}>
        <p className={styles.sell__title}>Creat And Sell Your NFTs</p>
        <div className={styles.sell__content}>
          <ul className={styles.sell__column}>
            <li className={styles.sell__list}>
              <img className={styles.sell__image} src={wallet} alt="" />
              <p className={styles.sell__subtitle}>Setup Your Wallet</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </li>
            <li className={styles.sell__list}>
              <img className={styles.sell__image} src={notepad} alt="" />
              <p className={styles.sell__subtitle}>For Sale Listing</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </li>
            <li className={styles.sell__list}>
              <img className={styles.sell__image} src={collect} alt="" />
              <p className={styles.sell__subtitle}>Creat Your Collection</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </li>
            <li className={styles.sell__list}>
              <img className={styles.sell__image} src={nft} alt="" />
              <p className={styles.sell__subtitle}>Add Your NFT</p>
              <p className={styles.sell__text}>
                when our power of choice is untram and when nothing prevents our
              </p>
            </li>
          </ul>
          <img className={styles.sell__bg} src={bg} alt="" />
        </div>
      </article>
    </section>
  );
};

export default Seller;
