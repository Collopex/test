import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRef, useEffect } from "react";

import FacebookReview from "../util/FacebookReview";
import FoursquareReview from "../util/FoursquareReview";
import GoogleReview from "../util/GoogleReview";
import RestaurantGuru from "../util/RestaurantGuru";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CommentSlider() {
  const foursquareRef = useRef(null);
  const restaurantGuruRef = useRef(null);
  const googleRef = useRef(null);
  const facebookRef = useRef(null);

  useEffect(() => {
    const el = foursquareRef.current;
    gsap.fromTo(
      el,
      {
        y: 70,
        duration: 1.25,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        opacity: 1,
        duration: 1.25,
        y: 0,
        ease: "power4.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    const el = restaurantGuruRef.current;
    gsap.fromTo(
      el,
      {
        y: 70,
        duration: 1.25,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.25,
        delay: 0.5,
        opacity: 1,
        y: 0,
        ease: "power4.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    const el = googleRef.current;
    gsap.fromTo(
      el,
      {
        y: 70,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.25,
        delay: 1,
        opacity: 1,
        y: 0,
        ease: "power4.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    const el = facebookRef.current;
    gsap.fromTo(
      el,
      {
        y: 70,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.25,
        delay: 1.5,
        opacity: 1,
        y: 0,
        ease: "power4.easeOut",
      }
    );
  }, []);

  return (
    <>
      <div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          interval={6000}
          autoPlay={true}
          infiniteLoop
        >
          <div className="comments">
            <h3>
              ??ok sevdi??im mekanlardan biri. Alemi sevenlerin Bursa'daki tek
              e??lence mek??n??
            </h3>
            <p className="author">- Mustafa A.</p>
          </div>
          <div className="comments">
            <h3>
              Mezeler harika, ??al????anlar kibar, ortam s??cac??k, k??zlar g??zel hele
              bir de dostlarlaysan keyfe diyecek yok...
            </h3>
            <p className="author">- H??seyin P.</p>
          </div>
          <div className="comments">
            <h3>
              Dostlar??mla gitt??im se??ili mekanlardan biri fiyatlar?? piyasaya
              g??re bi t??k pahal?? ama hizmetten ??ok memnunuz.
            </h3>
            <p className="author ">- B??lent K.</p>
          </div>
          <div className="comments ">
            <h3>????erisi tam bir ??ampiyonlar ligi gibi s??per.</h3>
            <p className="author">- ??smail Y.</p>
          </div>
          <div className="comments ">
            <h3>
              E??imle beraber gitmi??tik, kaliteli ve nezih bir mekan
              ??nerebilce??im nadir yerlerden biri.
            </h3>
            <p className="author">- Asl?? C.</p>
          </div>
        </Carousel>

        <div className="reviews">
          <div className="review" ref={foursquareRef}>
            <FoursquareReview />
            <span className="review-pts">8.4/10</span>
          </div>
          <div className="review" ref={restaurantGuruRef}>
            <RestaurantGuru />
            <span className="review-pts">4/5</span>
          </div>
          <div className="review" ref={googleRef}>
            <GoogleReview />
            <span className="review-pts">4.6/5</span>
          </div>
          <div className="review" ref={facebookRef}>
            <FacebookReview />
            <span className="review-pts">3.4/5</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default CommentSlider;
