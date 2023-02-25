//Import images
import avatar1 from "../img/Collection/avatar1.png";
import avatar2 from "../img/Collection/avatar2.png";
import avatar3 from "../img/Collection/avatar3.png";

import slider1 from "../img/Collection/slider1.png";
import slider2 from "../img/Collection/slider2.png";
import slider3 from "../img/Collection/slider3.png";

import img1 from "../img/Collection/img1.png";
import img2 from "../img/Collection/img2.png";
import img3 from "../img/Collection/img3.png";
import img4 from "../img/Collection/img4.png";
import img5 from "../img/Collection/img5.png";
import img6 from "../img/Collection/img6.png";
import img7 from "../img/Collection/img7.png";
import img8 from "../img/Collection/img8.png";
import img9 from "../img/Collection/img9.png";
import img10 from "../img/Collection/img10.png";
import img11 from "../img/Collection/img11.png";

import vector from "../img/Collection/Vector.png";

const Collection = () => {
  return (
    <div className="collection">
      <article className="nft-collection">
        <h1 className="nft-collection__title app-title">Collection</h1>
        <p className="nft-collection__name app-name">
          NFT Collection <span>Art</span>
          <img src={vector} alt="" className="app-vector" />
        </p>
        <ul className="nft-collection__columns app-column">
          <li className="nft-collection__list app-list">
            <img
              src={slider1}
              alt=""
              className="nft-collection__slider app-slider"
            />
            <img
              src={avatar1}
              alt=""
              className="nft-collection__avatar app-avatar"
            />
            <p className="nft-collection__profile-name app-profile-name">
              Alabama khan
            </p>
            <p className="nft-collection__bio app-bio">
              which is the same as saying through shrinking from toil and pain.
              These cases are
            </p>
            <button type="submit" className="nft-collection__btn app-button">
              +FOLLOW
            </button>
          </li>
          <li className="nft-collection__list app-list">
            <img
              src={slider2}
              alt=""
              className="nft-collection__slider app-slider"
            />
            <img
              src={avatar2}
              alt=""
              className="nft-collection__avatar app-avatar"
            />
            <p className="nft-collection__profile-name app-profile-name">
              Alabama khan
            </p>
            <p className="nft-collection__bio app-bio">
              which is the same as saying through shrinking from toil and pain.
              These cases are
            </p>
            <button type="submit" className="nft-collection__btn app-button">
              +FOLLOW
            </button>
          </li>
          <li className="nft-collection__list app-list">
            <img
              src={slider3}
              alt=""
              className="nft-collection__slider app-slider"
            />
            <img
              src={avatar3}
              alt=""
              className="nft-collection__avatar app-avatar"
            />
            <p className="nft-collection__profile-name app-profile-name">
              Alabama khan
            </p>
            <p className="nft-collection__bio app-bio">
              which is the same as saying through shrinking from toil and pain.
              These cases are
            </p>
            <button type="submit" className="nft-collection__btn app-button">
              +FOLLOW
            </button>
          </li>
        </ul>
        <div className="nft-collection__link app-link">
          <a href="#s">
            <span>View All Category</span>
          </a>
        </div>
      </article>
      <article className="nft-art">
        <p className="nft-art__name app-name">
          NFT art, Domain name, Stachu, Collection Gallery
        </p>
        <p className="nft-art__subtitile app-subtitle">
          It has survived not only five centuries, but also the leap into <br />
          electronic typesetting, remaining essentially unchanged
        </p>
        <ul className="nft-art__columns app-column">
          <li className="nft-art__list app-list">
            <img src={img1} alt="" className="nft-art__image app-img" />
            <img src={img2} alt="" className="nft-art__image app-img" />
            <img src={img3} alt="" className="nft-art__image app-img" />
            <img src={img4} alt="" className="nft-art__image app-img" />
          </li>
          <li className="nft-art__list app-list">
            <img src={img5} alt="" className="nft-art__image app-img" />
            <img src={img6} alt="" className="nft-art__image app-img" />
            <img src={img7} alt="" className="nft-art__image app-img" />
          </li>
          <li className="nft-art__list app-list">
            <img src={img8} alt="" className="nft-art__image app-img" />
            <img src={img9} alt="" className="nft-art__image app-img" />
            <img src={img10} alt="" className="nft-art__image app-img" />
            <img src={img11} alt="" className="nft-art__image app-img" />
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Collection;
