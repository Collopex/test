import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CardSlider = () => {
  return (
    <div className=" flex container mds-margin-top ">
      <Carousel width={400}>
        <div className="womens">
          <img src="images/photos/sliderimg1.webp" alt="women-dancing" />
          <p className="legend">Karina </p>
        </div>
        <div>
          <img src="images/photos/sliderimg1.webp" alt="women-dancing" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/photos/sliderimg1.webp" alt="women-dancing" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </div>
  );
};
export default CardSlider;
