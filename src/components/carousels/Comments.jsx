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
              Çok sevdiğim mekanlardan biri. Alemi sevenlerin Bursa'daki tek
              eğlence mekânı
            </h3>
            <p className="author">- Mustafa A.</p>
          </div>
          <div className="comments">
            <h3>
              Mezeler harika, çalışanlar kibar, ortam sıcacık, kızlar güzel hele
              bir de dostlarlaysan keyfe diyecek yok...
            </h3>
            <p className="author">- Hüseyin P.</p>
          </div>
          <div className="comments">
            <h3>
              Dostlarımla gittğim seçili mekanlardan biri fiyatları piyasaya
              göre bi tık pahalı ama hizmetten çok memnunuz.
            </h3>
            <p className="author ">- Bülent K.</p>
          </div>
          <div className="comments ">
            <h3>İçerisi tam bir şampiyonlar ligi gibi süper.</h3>
            <p className="author">- İsmail Y.</p>
          </div>
          <div className="comments ">
            <h3>
              Eşimle beraber gitmiştik, kaliteli ve nezih bir mekan
              önerebilceğim nadir yerlerden biri.
            </h3>
            <p className="author">- Aslı C.</p>
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
