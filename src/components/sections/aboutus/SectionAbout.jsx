import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutCaption() {
  const aboutCaptionRef = useRef(null);
  const aboutDetailsRef = useRef(null);

  useEffect(() => {
    const el = aboutCaptionRef.current;
    gsap.fromTo(
      el,
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center center",
          scrub: 2,
        },
        duration: 1.05,
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);

  useEffect(() => {
    const el = aboutDetailsRef.current;
    gsap.fromTo(
      el,
      {
        x: 50,
        opacity: 0.25,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center center",
          scrub: 2,
        },
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  }, []);

  return (
    <>
      <div ref={aboutCaptionRef}>
        <h2 className="caption-about">Hakkımızda</h2>
      </div>
      <div className="aboutus-container">
        <p className="aboutus-description" ref={aboutDetailsRef}>
          Bursa'nın sayılı "Turistik" Gazniosu olarak 1994'den beri hizmet
          vermekten gurur duyuyoruz. Seçkin kadromuz ve zengin içeriklerimiz ile
          her zaman akıllarda kalmayı başardık. Geçmişten bu yana bir çok ünlü
          solistleri konuk ettik ve etmeyede devam ediceğiz. Başarımızda en
          büyük etkenin masraftan hibçir zaman kaçmayıp siz değerli
          müşterilerimize en iyi hizmeti sağlamak oldu.
          <span className="aboutus-description-thanks">
            "Bu zamana kadar bizi seçtiğiniz için sizlere teşekkür ederiz ve
            sizleri tekrardan aramızda görmekten memnuniyet duyarız..."
          </span>
        </p>
      </div>
    </>
  );
}
export default AboutCaption;
