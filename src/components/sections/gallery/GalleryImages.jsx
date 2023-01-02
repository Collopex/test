import PhotoAlbum from "react-photo-album";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src: "images/photos/img1.jpg", width: 800, height: 533 },
  { src: "images/photos/img2.1.jpg", width: 800, height: 533 },
  { src: "images/photos/img2.jpg", width: 800, height: 533 },
  { src: "images/photos/img3.jpg", width: 800, height: 533 },
  { src: "images/photos/img3.1.jpg", width: 800, height: 533 },
  { src: "images/photos/img4.jpg", width: 800, height: 533 },
  { src: "images/photos/img6.jpg", width: 800, height: 533 },
  { src: "images/photos/img7.jpg", width: 800, height: 533 },
  { src: "images/photos/img8.jpg", width: 800, height: 533 },
  { src: "images/photos/img9.jpg", width: 800, height: 533 },
  { src: "images/photos/img10.jpg", width: 800, height: 533 },
  { src: "images/photos/img16.jpg", width: 800, height: 533 },
  { src: "images/photos/img14.jpg", width: 800, height: 533 },
  { src: "images/photos/img13.jpg", width: 800, height: 533 },
  { src: "images/photos/img12.jpg", width: 800, height: 533 },
];

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
    <div className="gallery" ref={galleryRef}>
      <PhotoAlbum layout="rows" photos={photos} className="hover-image" />
    </div>
  );
}

export default GalleryImages;
