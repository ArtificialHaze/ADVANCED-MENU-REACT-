import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            velit fugiat blanditiis alias perspiciatis culpa quasi ab quidem quo
            voluptas.
          </p>
          <button className="btn">START</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="image" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
