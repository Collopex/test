import { useEffect, useRef } from "react";
import gsap from "gsap";

function HeroSlider() {
  const heroCaption = useRef(null);
  const heroDetail = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".content-caption",
      {
        y: -45,
        opacity: 0,
      },
      {
        duration: 1,
        delay: 1.3,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".content-detail",
      {
        y: -45,
        opacity: 0,
      },
      {
        duration: 1,
        delay: 1.3,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  return (
    <>
      <div className="container-hero">
        <div className="hero-slider-grid">
          <div className="content-hero">
            <h1 className="content-caption" ref={heroCaption}>
              Yeni Hisar Gazinosu
            </h1>
            <p className="content-detail" ref={heroDetail}>
              Bursa'nın 1 numaralı eğlence adresi her gece sizler için
              kapılarını açıyor...
            </p>
          </div>

          <div className="content-img">
            <img
              src="images/photos/heroimg.webp"
              alt="Joint Soloists"
              className="hero-img"
              height={"auto"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSlider;
