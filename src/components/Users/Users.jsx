import avatar from "./images/avatar.png";
import star from "./images/star.png";
import pic from "./images/pic.png";

import styles from "./styles/Users.module.css";

function Users() {
  const helloClick = () => {
    alert("hello!");
  };

  return (
    <section className={styles.users}>
      <article>
        <p></p>
        <p></p>
      </article>
      <article>
        <div>
          <div>
            <img src="" alt="" />
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <img src="" alt="" />
          </div>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </article>
      <article>
        <button onClick={helloClick}></button>
        <button onClick={helloClick}></button>
        <button onClick={helloClick}></button>
        <button onClick={helloClick}></button>
      </article>
    </section>
  );
}

export default Users;
