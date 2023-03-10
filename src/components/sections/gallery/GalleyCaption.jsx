import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function GalleryCaption() {
  const galleryCaptionRef = useRef(null);

  useEffect(() => {
    const el = galleryCaptionRef.current;
    gsap.fromTo(
      el,
      {
        y: -60,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.25,
        y: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);
  return (
    <>
      <h2 className="caption-gallery" ref={galleryCaptionRef}>
        Galeri
      </h2>
    </>
  );
}
export default GalleryCaption;
