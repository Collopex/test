import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CommentCaption() {
  const testimonialCaptionRef = useRef(null);

  useEffect(() => {
    const el = testimonialCaptionRef.current;
    gsap.fromTo(
      el,
      {
        x: 150,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);
  return (
    <>
      <div>
        <h2 className="caption-testimonial" ref={testimonialCaptionRef}>
          Yorumlar
        </h2>
      </div>
    </>
  );
}
export default CommentCaption;
