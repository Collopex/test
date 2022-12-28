import { Carousel } from "antd";
const CardSlider = () => {
  let mediaQuery = window.matchMedia("(max-width: 600px)");
  if (mediaQuery.matches) {
    mediaQuery = 2;
  } else {
    mediaQuery = 3;
  }
  return (
    <div className=" womens mds-margin-top ">
      <Carousel
        dots={false}
        autoplay
        pauseOnHover={false}
        autoplaySpeed={3500}
        slidesToShow={mediaQuery}
        draggable
        onLazyLoad={true}
      >
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Katia Kovaleva</p>
          </div>
        </div>
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Katia Kovaleva</p>
          </div>
        </div>
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Katia Kovaleva</p>
          </div>
        </div>
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Katia Kovaleva</p>
          </div>
        </div>
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Katia Kovaleva</p>
          </div>
        </div>
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Avdotia Mikhaylova</p>
          </div>
        </div>
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Sveta Koroleva</p>
          </div>
        </div>
        <div>
          <div className="ui-card">
            <img
              className="ui-card img-prefix"
              src="images/photos/sliderimg1.webp"
              alt=""
            />
            <p className="ui-card-title ">Zina Sokolova</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default CardSlider;
