import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Component } from "react";
import "../OwlCarousel/OwlCarousel.scss";

class Owldemo1 extends Component {
  render() {
    const options = {
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
    };

    const carouselItems = [
      {
        title: "John Deo",
        text: "Lorem, ipsum dolor.",
        text2:
          '"QuantumQuest is a captivating odyssey through the mysteries of physics. As a lifelong enthusiast, this book not only satisfied my curiosity but ignited a new passion for the wonders of the cosmos."',
        imageUrl: "/2.png",
      },
      {
        title: "John Deo",
        text: "Lorem, ipsum dolor.",
        text2:
          '"I`ve always found physics to be a daunting subject, but QuantumQuest transformed my perspective entirely. The author skillfully navigates complex ideas, making them accessible and engaging."',
        imageUrl: "/1.png",
      },
      {
        title: "John Deo",
        text: "Lorem, ipsum dolor.",
        text2:
          '"QuantumQuest isn`t just a book; it s a celestial adventure that takes you on an enthralling ride through the realms of physics. The author`s ability to simplify concepts without sacrificing depth is commendable."',
        imageUrl: "/3.png",
      },
    ];

    return (
      <div className="testimonials">
        <div className="testimonial">
          <OwlCarousel {...options}>
            {carouselItems.map((item, index) => (
              <div className="item" key={index}>
                <p className="qoute">{item.text2}</p>
                <div className="image">
                  <img
                    className="img"
                    src={item.imageUrl}
                    alt={`carousel-img-${index + 1}`}
                  />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
