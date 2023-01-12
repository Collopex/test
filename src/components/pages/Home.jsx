import { Fragment } from "react";
import "../../index.css";

import HeroSlider from "../sections/hero/WaveSlider";
import AboutWrapper from "../sections/aboutus/SectionWrapper";
import Footer from "../sections/footer/Footer";
import WomensWrapper from "../sections/womens/SectionWrapper";
import GalleryWrapper from "../sections/gallery/GalleryWrapper";
import MenuWrapper from "../sections/menu/MenuWrapper";
import CommentsWrapper from "../sections/testimonials/CommentsWrapper";
import ReservationWrapper from "../sections/reservation/ReservationWrapper";

function Home() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <div>
        <section id="hero">
          <HeroSlider />
        </section>
        <section id="about">
          <AboutWrapper />
        </section>

        <section id="women">
          <WomensWrapper />
        </section>

        <section id="gallery">
          <GalleryWrapper />
        </section>

        <section id="menu">
          <MenuWrapper />
        </section>

        <section id="comment">
          <CommentsWrapper />
        </section>

        <section id="reservation">
          <ReservationWrapper />
        </section>

        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </Fragment>
  );
}

export default Home;
