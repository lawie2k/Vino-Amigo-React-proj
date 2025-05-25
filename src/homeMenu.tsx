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
import "./homeMenu.css";
import React, { useState } from "react";

const homeMenu: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
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

      <div className="Shop">
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

      <div className="loginBG">
        {showLogin ? (
          <div className="login" id="login">
            <div className="loginBox">
              <div className="login-signup-switch">
                <button onClick={() => setShowLogin(true)}>Login</button>
                <button onClick={() => setShowLogin(false)}>Signup</button>
              </div>
              <div className="loginInput">
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button>Login</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="signup">
            <div className="signupBox">
              <div className="login-signup-switch">
                <button onClick={() => setShowLogin(true)}>Login</button>
                <button onClick={() => setShowLogin(false)}>Signup</button>
              </div>
              <div className="signupInput">
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button>Create Account</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default homeMenu;
