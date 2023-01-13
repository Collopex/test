import Logo from "../../util/Logo";
import Navbar from "../../util/Navbar";
import NavbarClose from "../../util/NavbarClose";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Link } from "react-scroll";

function NavbarWrapper() {
  const navbarSection = useRef(null);
  const navRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      {
        y: 80,
        opacity: 0,
      },
      {
        duration: 1,
        delay: 1.1,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      }
    );
  }, []);

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar" ref={navbarSection}>
      <header>
        <Logo />
        <button
          className="nav-btn"
          onClick={toggleNavbar}
          aria-label="Joint Navigation"
        >
          <Navbar />
        </button>
        <nav ref={navRef}>
          <ul className="navbar">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
                onClick={toggleNavbar}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={toggleNavbar}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                to="women"
                spy={true}
                smooth={true}
                offset={5}
                duration={1400}
                onClick={toggleNavbar}
              >
                Sanatçılarımız & Dansçılarımız
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1400}
                onClick={toggleNavbar}
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                spy={true}
                smooth={true}
                offset={10}
                duration={1300}
                onClick={toggleNavbar}
              >
                Menü
              </Link>
            </li>
            <li>
              <Link
                to="comment"
                spy={true}
                smooth={true}
                offset={10}
                duration={1400}
                onClick={toggleNavbar}
              >
                Yorumlar
              </Link>
            </li>
            <li>
              <Link
                to="reservation"
                spy={true}
                smooth={true}
                offset={40}
                duration={1400}
                onClick={toggleNavbar}
              >
                İleştişim & Rezervasyon
              </Link>
            </li>
          </ul>

          <button
            className="nav-btn nav-close-btn"
            onClick={toggleNavbar}
            aria-label="Joint Navigation Close"
          >
            <NavbarClose />
          </button>
        </nav>
      </header>
    </div>
  );
}
export default NavbarWrapper;
