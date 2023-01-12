import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import NavbarWrapper from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HeroSlider() {
  const heroCaption = useRef(null);
  const heroDetail = useRef(null);
  const heroButton = useRef(null);

  useEffect(() => {
    const el = heroCaption.current;
    gsap.fromTo(
      el,
      {
        y: 60,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        delay: 1.4,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    const el = heroDetail.current;
    gsap.fromTo(
      el,
      {
        y: 60,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        delay: 1.4,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    const el = heroButton.current;
    gsap.fromTo(
      el,
      {
        y: 100,
        opacity: 0,
      },
      {
        delay: 1.4,
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.easeOut",
        stagger: {
          from: "start",
          amount: 0.5,
        },
      }
    );
  }, []);

  return (
    <>
      <NavbarWrapper />
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
            <Link
              to="reservation"
              spy={true}
              smooth={true}
              offset={600}
              duration={1500}
            >
              <button className="content-button" ref={heroButton}>
                Rezervasyon
              </button>
            </Link>
          </div>

          <div className="content-img">
            <img
              src="images/photos/heroimg.png"
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
