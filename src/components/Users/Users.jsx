import avatar from "./images/avatar.png";
import star from "./images/star.png";
import pic from "./images/pic.png";

import styles from "./styles/Users.module.css";
import { useState } from "react";

function Users() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <section className={styles.users}>
      <article>
        <p className={styles.users__title}>Hear From Our Happy Users</p>
        <p className={styles.users__subtitle}>
          It has survived not only five centuries, but also the leap into <br />
          electronic typesetting, remaining essentially unchanged
        </p>
      </article>
      <article className={styles.users_slider}>
        <div className={styles.users_slider__profile}>
          <div className={styles.users_slider__profile_info}>
            <img className={styles.users_slider__avatar} src={avatar} alt="" />
            <ul className={styles.users_slider__column}>
              <li className={styles.users_slider__list}>
                <p className={styles.users_slider__name}>Alamin Khan</p>
              </li>
              <li className={styles.users_slider__list}>
                <p className={styles.users_slider__post}>Art Director</p>
              </li>
              <li className={styles.users_slider__list}>
                <span className={styles.users_slider__rating}></span>
                <span className={styles.users_slider__rating}></span>
                <span className={styles.users_slider__rating}></span>
                <span className={styles.users_slider__rating}></span>
                <span className={styles.users_slider__rating}></span>
              </li>
            </ul>
          </div>
          <p className={styles.users_slider__description}>
            It has survived not only five centuries, but also the leap into{" "}
            <br />
            electronic typesetting, remaining essentially unchanged. It <br />
            popularised in the 1960s with the release of Letraset containing{" "}
            <br />
            Lorem Ipsum passages, and more recently with.
          </p>
        </div>
        <div className={styles.users_slider__pic}>
          <img src={pic} alt="" />
        </div>
      </article>
      <article className={styles.slider_buttons}>
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
      </article>
    </section>
  );
}

export default Users;
