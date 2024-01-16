import { Link } from "react-router-dom";
import "../Hero/Hero.scss";
import Owldemo1 from "../OwlCarousel/OwlCarousel";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="left">
          <h1>Unraveling the Wonders of Physics</h1>
          <p className="text">
            Embark on a Celestial Journey with QuantumQuest, Your Gateway to the
            Marvels of Physics. Explore the Depths of Space, Delve into
            Subatomic Realms, and Illuminate Your Understanding of the Universe.
          </p>
          <div className="buttons">
            <Link to="/Book">
              <button className="active">Buy for $15</button>
            </Link>
            <button>Learn more</button>
          </div>
          <Owldemo1 />
        </div>

        <div className="right">
          <img src="/book.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
