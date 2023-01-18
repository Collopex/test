import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MenuItem() {
  const menuCaptionRef = useRef(null);
  const menuRefLeft = useRef(null);
  const menuRefRight = useRef(null);

  useEffect(() => {
    const el = menuCaptionRef.current;
    gsap.fromTo(
      el,
      {
        y: 120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center center",
          scrub: 3,
        },
        duration: 1.05,
        y: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);
  useEffect(() => {
    const el = menuRefLeft.current;
    gsap.fromTo(
      el,
      {
        x: -120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center center",
          scrub: 3,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);
  useEffect(() => {
    const el = menuRefRight.current;
    gsap.fromTo(
      el,
      {
        x: 120,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center center",
          scrub: 3,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);
  return (
    <div>
      <h2 className="caption-menu" ref={menuCaptionRef}>
        Menü
      </h2>
      <div className="menu-grid">
        <div ref={menuRefLeft}>
          <div className="menu-items-caption">Alkoller</div>
          <h3 className="menu-items-sub-cation ">BİRA</h3>
          <p className="menu-items">Efes Özel Seri </p>
          <p className="menu-items">Miller</p>
          <h3 className="menu-items-sub-cation ">VİSKİ</h3>
          <p className="menu-items">Chivas Regal</p>
          <p className="menu-items">Jack Daniel's </p>
          <h3 className="menu-items-sub-cation ">RAKI</h3>
          <p className="menu-items">Yeni Rakı</p>
          <p className="menu-items">Tekirdağ</p>
          <h3 className="menu-items-sub-cation ">VOTKA</h3>
          <p className="menu-items">Smirnoff</p>
          <p className="menu-items">Absolute</p>
          <h3 className="menu-items-sub-cation ">Kokteyller</h3>
          <p className="menu-items">Margarita</p>
          <p className="menu-items">Martini</p>
          <p className="menu-items">Sex On The Beach</p>
          <p className="menu-items">Long Island </p>
          <p className="menu-items">Bellini</p>
          <p className="menu-items">Crusta</p>
          <p className="menu-items">Bramble</p>
        </div>

        <div ref={menuRefRight}>
          <div className="menu-items-caption ">Yiyecekler</div>
          <h3 className="menu-items-sub-cation ">YEMEKLER</h3>
          <p className="menu-items">Izgara Çeşitleri</p>
          <p className="menu-items">Köfte Çeşitleri</p>
          <p className="menu-items">Tavuk Çeşitleri</p>
          <p className="menu-items">Pilav Çeşitleri</p>
          <p className="menu-items">Patates Kızartması </p>
          <p className="menu-items">Çorba Çeşitleri</p>
          <p className="menu-items">Salatalıklar</p>
          <h3 className="menu-items-sub-cation ">Mezeler</h3>
          <p className="menu-items">Haydari</p>
          <p className="menu-items">Acılı Ezme</p>
          <p className="menu-items">Yoğurtlu Biber</p>
          <p className="menu-items">Beyaz Peynir</p>
          <p className="menu-items">Patlıcanlı Haydari</p>
          <p className="menu-items">Patlıcan Tarator</p>
          <p className="menu-items">Havuç Tarator</p>
          <p className="menu-items">Humus</p>
          <p className="menu-items">Muhammara</p>
          <p className="menu-items">Kavun</p>
          <p className="menu-items">Karpuz</p>
          <p className="menu-items">Şakşuka</p>
          <p className="menu-items">Çerez Çeşitleri</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
