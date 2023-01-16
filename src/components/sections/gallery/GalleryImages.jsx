import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function GalleryImages() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const el = galleryRef.current;
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
    <div className="gallery-container" ref={galleryRef}>
      <div className="gallery-grid gallery-container">
        <figure className="gallery-item">
          <img src="images/photos/img1.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img2.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img3.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img4.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img5.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img6.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img7.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img8.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img9.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img10.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img11.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img12.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img13.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img14.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>

        <figure className="gallery-item">
          <img src="images/photos/img15.jpg" alt="hisar-galeri-fotoğraflar" />
        </figure>
      </div>
    </div>
  );
}

export default GalleryImages;
