import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ReservationDetails() {
  const reservationCaptionRef = useRef(null);
  const reservationRef = useRef(null);

  useEffect(() => {
    const el = reservationCaptionRef.current;
    gsap.fromTo(
      el,
      {
        x: -60,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);
  useEffect(() => {
    const el = reservationRef.current;
    gsap.fromTo(
      el,
      {
        x: 60,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  return (
    <>
      <h2 className="reservation-caption-up" ref={reservationCaptionRef}>
        Rezervasyon
      </h2>
      <div ref={reservationRef}>
        <p className="reservation-contactus">
          Özel Localarmız için lütfen rezervasyon yapmayı unutmayınız...
        </p>
        <p className="reservation-number">+90 224 66 34</p>
        <p className="reservation-number">+90 224 66 35</p>
      </div>
    </>
  );
}

export default ReservationDetails;
