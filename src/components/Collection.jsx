//Import images
import avatar1 from "../img/Collection/avatar1.png";
import avatar2 from "../img/Collection/avatar2.png";
import avatar3 from "../img/Collection/avatar3.png";

import slider1 from "../img/Collection/slider1.png";
import slider2 from "../img/Collection/slider2.png";
import slider3 from "../img/Collection/slider3.png";

import img1 from '../img/Collection/img1.png'
import img2 from '../img/Collection/img2.png'
import img3 from '../img/Collection/img3.png'
import img4 from '../img/Collection/img4.png'
import img5 from '../img/Collection/img5.png'
import img6 from '../img/Collection/img6.png'
import img7 from '../img/Collection/img7.png'
import img8 from '../img/Collection/img8.png'
import img9 from '../img/Collection/img9.png'
import img10 from '../img/Collection/img10.png'
import img11 from '../img/Collection/img11.png'

const Collection = () => {
  return (
    <div className="collection">
      <article className="nft-collection">
        <h1 className="nft-collection__title app-title"></h1>
        <p className="nft-collection__name app-name"></p>
        <ul className="nft-collection__columns app-column">
          <li className="nft-collection__list app-list">
            <img src="" alt="" className="nft-collection__slider app-slider" />
            <img src="" alt="" className="nft-collection__avatar app-avatar" />
            <p className="nft-collection__name app-profile-name"></p>
            <p className="nft-collection__bio app-bio"></p>
            <button
              type="submit"
              className="nft-collection__btn app-button"
            ></button>
          </li>
          <li className="nft-collection__list app-list">
            <img src="" alt="" className="nft-collection__slider app-slider" />
            <img src="" alt="" className="nft-collection__avatar app-avatar" />
            <p className="nft-collection__name app-profile-name"></p>
            <p className="nft-collection__bio app-bio"></p>
            <button
              type="submit"
              className="nft-collection__btn app-button"
            ></button>
          </li>
          <li className="nft-collection__list app-list">
            <img src="" alt="" className="nft-collection__slider app-slider" />
            <img src="" alt="" className="nft-collection__avatar app-avatar" />
            <p className="nft-collection__name app-profile-name"></p>
            <p className="nft-collection__bio app-bio"></p>
            <button
              type="submit"
              className="nft-collection__btn app-button"
            ></button>
          </li>
        </ul>
        <a href="#" className="nft-collection__link app-link">
          <span></span>
        </a>
      </article>
      <article className="nft-art">
        <p className="nft-art__name app-name"></p>
        <p className="nft-art__subtitile app-subtitle"></p>
        <ul className="nft-art__columns app-column">
          <li className="nft-art__list app-list">
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
          </li>
          <li className="nft-art__list app-list">
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
          </li>
          <li className="nft-art__list app-list">
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
            <img src="" alt="" className="nft-art__image app-img" />
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Collection;
