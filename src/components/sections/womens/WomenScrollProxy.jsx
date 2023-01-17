import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function WomenScrollProxy() {
  const womenCaptionRef = useRef(null);
  const womenDetailsRef = useRef(null);
  const womenImagesRef = useRef(null);

  useEffect(() => {
    const el = womenCaptionRef.current;
    gsap.fromTo(
      el,
      {
        x: -100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);
  useEffect(() => {
    const el = womenDetailsRef.current;
    gsap.fromTo(
      el,
      {
        x: 100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);
  useEffect(() => {
    const el = womenImagesRef.current;
    gsap.fromTo(
      el,
      {
        z: 80,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1,
        z: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  return (
    <>
      <div className="container-grid-women">
        <div className="women-title" ref={womenCaptionRef}>
          Sanatçılarmız & Dansçılarımız
        </div>
        <div className="left-block-women-card" ref={womenDetailsRef}>
          Bursa'nın en ünlü solistleri ile unutulmaz türk sanat müzikleri ve
          yabancı müzikler, birbirinden farklı uluslararası dansçılarmız ile
          farklı koreografik dans şölenleri ile her gece Yeni Hisar Gazino'da
          sizleri bekliyor...
        </div>

        <div className="right-block-women-card" ref={womenImagesRef}>
          <Carousel
            showStatus={false}
            showThumbs={false}
            swipeable
            interval={4000}
            autoPlay={true}
            infiniteLoop
            showArrows={false}
          >
            <div>
              <img
                src="images/photos/sliderimg1.webp"
                alt=""
                className="girl-images-asp-ratio"
              />
              <p className="legend">Girl 1</p>
            </div>
            <div>
              <img
                src="images/photos/sliderimg1.webp"
                alt=""
                className="girl-images-asp-ratio"
              />
              <p className="legend">Girl 1</p>
            </div>
            <div>
              <img
                src="images/photos/sliderimg1.webp"
                alt=""
                className="girl-images-asp-ratio"
              />
              <p className="legend">Girl 1</p>
            </div>
            <div>
              <img
                src="images/photos/sliderimg1.webp"
                alt=""
                className="girl-images-asp-ratio"
              />
              <p className="legend">Girl 1</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default WomenScrollProxy;
