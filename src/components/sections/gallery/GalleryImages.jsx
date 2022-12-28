import PhotoAlbum from "react-photo-album";
import styles from "./GalleryImage.module.css";

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
  { src: "images/photos/img10.1.jpg", width: 800, height: 533 },
  { src: "images/photos/img11.jpg", width: 800, height: 533 },
  { src: "images/photos/img11.1.jpg", width: 800, height: 533 },
  { src: "images/photos/img12.jpg", width: 800, height: 533 },
  { src: "images/photos/img13.jpg", width: 800, height: 533 },
  { src: "images/photos/img14.jpg", width: 800, height: 533 },
  { src: "images/photos/img15.jpg", width: 800, height: 533 },
];

const GalleryImages = () => (
  <div className={styles.gallery}>
    <PhotoAlbum layout="rows" photos={photos} className="hover-image" />
  </div>
);

export default GalleryImages;
