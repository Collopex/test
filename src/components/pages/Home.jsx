import { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../util/Loader";

import "mapbox-gl/dist/mapbox-gl.css";
import "../../index.css";

import MainHeader from "../navigation/MainHeader";
import HeroSlider from "../sections/hero/WaveSlider";
import AboutWrapper from "../sections/aboutus/SectionWrapper";
import WomensWrapper from "../sections/womens/SectionWrapper";
import GalleryWrapper from "../sections/gallery/GalleryWrapper";
import CommentsWrapper from "../sections/testimonials/CommentsWrapper";
import ReservationWrapper from "../sections/reservation/ReservationWrapper";
import Footer from "../sections/footer/Footer";
import MenuWrapper from "../sections/menu/MenuWrapper";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2100);
  });

  // Revaling Sections
  const { ref: AboutRef, inView: AboutIsVisible } = useInView();
  const { ref: WomenRef, inView: WomenIsVisible } = useInView();
  const { ref: GalleryRef, inView: GalleryIsVisible } = useInView();
  const { ref: MenuRef, inView: MenuIsVisible } = useInView();
  const { ref: TestimonialsRef, inView: TestimonialsIsVisible } = useInView();
  const { ref: ReservationRef, inView: ReservationRefIsVisible } = useInView();

  return (
    <Fragment>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <section>
              <MainHeader />
            </section>
            <main>
              <section id="hero">
                <HeroSlider />
              </section>

              <section
                className={`${!AboutIsVisible ? "section--hidden" : "section"}`}
                ref={AboutRef}
                id="about"
              >
                <AboutWrapper />
              </section>
              <section
                className={`${!WomenIsVisible ? "section--hidden" : "section"}`}
                ref={WomenRef}
                id="womens"
              >
                <WomensWrapper />
              </section>
              <section
                className={`${
                  !GalleryIsVisible ? "section--hidden" : "section"
                }`}
                ref={GalleryRef}
                id="gallery"
              >
                <GalleryWrapper />
              </section>
              <section
                className={`${!MenuIsVisible ? "section--hidden" : "section"}`}
                ref={MenuRef}
                id="gallery"
              >
                <MenuWrapper />
              </section>
              <section
                className={`${
                  !TestimonialsIsVisible ? "section--hidden" : "section"
                }`}
                ref={TestimonialsRef}
                id="testimonials"
              >
                <CommentsWrapper />
              </section>

              <section
                className={`${
                  !ReservationRefIsVisible ? "section--hidden" : "section"
                }`}
                ref={ReservationRef}
                id="reservation"
              >
                <ReservationWrapper />
              </section>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Home;
