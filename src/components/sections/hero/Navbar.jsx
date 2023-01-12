import Logo from "../../util/Logo";
import Navbar from "../../util/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function NavbarWrapper() {
  const navbarSection = useRef(null);

  useEffect(() => {
    const el = navbarSection.current;
    gsap.fromTo(
      el,
      {
        y: 80,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: el,
        },
        duration: 1,
        delay: 1.1,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);
  return (
    <div className="navbar" ref={navbarSection}>
      <Logo />
      <Navbar />
    </div>
  );
}
export default NavbarWrapper;
