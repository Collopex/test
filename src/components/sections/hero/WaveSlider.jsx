import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-scroll";

import Logo from "../../util/Logo";
import NavbarLogo from "../../util/Navbar";
import FacebookLogo from "../../util/FacebookLogo";
import InstagramLogo from "../../util/InstagramLogo";

function HeroSlider() {
  // let menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".menu",
      {
        x: 100,
        opacity: 0,
      },
      {
        delay: 6.2,
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.easeOut",
        stagger: {
          from: "start",
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".media ul li",
      {
        y: 100,
        opacity: 0,
      },
      {
        delay: 6.2,
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
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      {
        y: 100,
        opacity: 0,
      },
      {
        delay: 6.2,
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
  useEffect(() => {
    gsap.fromTo(
      ".desc",
      {
        x: 100,
        opacity: 0,
      },
      {
        delay: 6.2,
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power2.easeOut",
        stagger: {
          from: "start",
          amount: 0.5,
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".button-hero",
      {
        y: 100,
        opacity: 0,
      },
      {
        delay: 6.2,
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
    <div className="container-hero">
      <div className="temp"> </div>
      <div className="first-block"> </div>
      <div className="second-block"></div>
      <div className="loader">
        <ul>
          <li>Y</li>
          <li>Ü</li>
          <li>K</li>
          <li>L</li>
          <li>E</li>
          <li>N</li>
          <li>İ</li>
          <li>Y</li>
          <li>O</li>
          <li>R</li>
        </ul>
      </div>
      <div className="third-block"> </div>
      <div className="menu">
        <NavbarLogo />
      </div>
      <div className="logo">
        <Logo />
      </div>
      <div className="content">
        <div className="heading">
          <h1> Yeni Hisar Gazinosu</h1>
        </div>
        <div className="desc">
          <p>
            Bursa'nın 1 numaralı eğlence adresi her gece ışıklarını sizler için
            açıyor...
          </p>
        </div>
        <Link
          className="link"
          to="reservation"
          spy={true}
          smooth={true}
          offset={550}
          duration={1400}
        >
          <button type="button" className="button-hero">
            Rezervasyon
          </button>
        </Link>
      </div>
      <div className="img">
        <img src="images/photos/img4.jpg" alt="joint img" />
      </div>
      <div className="media">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/people/Yenihisar-Gazinosu/100068385632516/"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookLogo />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hisarnight/?hl=en"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramLogo />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HeroSlider;
