import { Carousel } from "antd";
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
        x: -120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
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
        x: 120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
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
        z: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        z: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  return (
    <>
      <div className="container-left ">
        <div className="women-card-wrappper">
          <div className="women-title" ref={womenCaptionRef}>
            Sanatçılarmız & Dansçılarımız
          </div>
          <div className="left-block-women-card" ref={womenDetailsRef}>
            Bursa'nın en ünlü solistleri ile unutulmaz türk sanat müzikleri ve
            yabancı müzikler, birbirinden farklı uluslararası dansçılarmız ile
            farklı koreografik dans şölenleri her gece Yeni Hisar Gazinosun'da
            sizleri bekliyor.
          </div>
        </div>
        <div className="right-block-women-card" ref={womenImagesRef}>
          <Carousel
            autoplay
            autoplaySpeed={5000}
            draggable
            pauseOnHover={false}
          >
            <img src="images/photos/sliderimg1.webp" alt="joint img" />
            <img src="images/photos/sliderimg1.webp" alt="joint img" />
            <img src="images/photos/sliderimg1.webp" alt="joint img" />
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default WomenScrollProxy;
