import Hero from "./assets/Vino_amigo.png";
import AboutPic from "./assets/aboutPic.png";
import Banner from "./assets/banner.png";
import Wine from "./assets/wine pic 1.png";
import Beer from "./assets/beer pic 1.png";
import Spirits from "./assets/spirits pic 1.png";
import Pic1 from "./assets/LatestProductPic/item 1.png";
import Pic2 from "./assets/LatestProductPic/item 2.png";
import Pic3 from "./assets/LatestProductPic/item 3.png";
import Pic4 from "./assets/LatestProductPic/item 4.png";
import Pic5 from "./assets/LatestProductPic/item 5.png";
import Pic6 from "./assets/LatestProductPic/item 6.png";
import Pic7 from "./assets/LatestProductPic/item 7.png";
import Pic8 from "./assets/LatestProductPic/item 8.png";
import Gpic1 from "./assets/gallery pics/pic1.png";
import Gpic2 from "./assets/gallery pics/pic2.png";
import Gpic3 from "./assets/gallery pics/pic3.png";
import Gpic4 from "./assets/gallery pics/pic4.png";
import Gpic5 from "./assets/gallery pics/pic5.png";
import Gpic6 from "./assets/gallery pics/pic6 1.png";
import Gpic7 from "./assets/gallery pics/pic7.png";
import Gpic8 from "./assets/gallery pics/pic8.png";
import Gpic9 from "./assets/gallery pics/pic9.png";
import "./homeMenu.css";
import React from "react";

const homeMenu: React.FC = () => {
  return (
    <>
      <div className="HeroBox">
        <div className="Hero">
          <h1 className="Herotext">
            VINO <br></br> AMIGO
          </h1>
          <img className="HeroPic" src={Hero} alt="hero pic" />
        </div>
      </div>

      <div className="AboutUs">
        <img src={AboutPic} alt="AboutPic" />
        <div className="AboutText">
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit amet. Vel sapiente facere vel molestiae
            eveniet in porro amet et tempora iusto non adipisci nostrum ea alias
            consequatur ad eaque nulla. Et exercitationem tenetur ut repudiandae
            vero quo sint mollitia est iusto voluptatem et ullam repellendus.
          </p>
        </div>
      </div>

      <div className="Shop" id="shop">
        <h2>SHOP</h2>
        <img src={Banner} alt="" />
        <h3>Latest Product</h3>

        <div className="LproductPic">
          <img src={Pic1} alt="" />
          <img src={Pic2} alt="" />
          <img src={Pic3} alt="" />
          <img src={Pic4} alt="" />
          <img src={Pic5} alt="" />
          <img src={Pic6} alt="" />
          <img src={Pic7} alt="" />
          <img src={Pic8} alt="" />
        </div>

        <div className="Category">
          <h4>Categories</h4>
          <div className="CategoryPic">
            <div className="Wine">
              <img src={Wine} alt="" />
              <h2>Wine</h2>
            </div>

            <div className="Beer">
              <img src={Beer} alt="" />
              <h2>Beer</h2>
            </div>

            <div className="Spirits">
              <img src={Spirits} alt="" />
              <h2>Spirits</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="Whyshop">
        <h2>WHY SHOP AT US</h2>

        <div className="box">
          <div className="boxes">
            <h3>Fast Delivery</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>

          <div className="boxes">
            <h3>Free Shiping</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>

          <div className="boxes">
            <h3>Best Quality</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
      </div>

      <div className="gallery" id="gallery">
        <div className="galleryTxt">
          <h2>GALLERY</h2>
        </div>
        <div className="galleryPics">
          <img src={Gpic1} alt="" />
          <img src={Gpic2} alt="" />
          <img src={Gpic3} alt="" />
          <img src={Gpic4} alt="" />
          <img src={Gpic5} alt="" />
          <img src={Gpic6} alt="" />
          <img src={Gpic7} alt="" />
          <img src={Gpic8} alt="" />
          <img src={Gpic9} alt="" />
          <img src={Gpic1} alt="" />
          <img src={Gpic2} alt="" />
          <img src={Gpic3} alt="" />
          <img src={Gpic4} alt="" />
          <img src={Gpic5} alt="" />
          <img src={Gpic6} alt="" />
          <img src={Gpic7} alt="" />
          <img src={Gpic8} alt="" />
          <img src={Gpic9} alt="" />
        </div>
      </div>
    </>
  );
};

export default homeMenu;
