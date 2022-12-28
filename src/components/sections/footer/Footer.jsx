import { Link } from "react-scroll";
import Logo from "../../util/Logo";
import PolicyWrapper from "../../policy/PolicyWrapper";

function Footer() {
  return (
    <>
      <div className="container flex-column">
        <div className=" footer-flex xlg-margin-top ">
          <Link
            className="footer-information nav-links"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
          >
            Hakkımızda
          </Link>
          <PolicyWrapper />
          <Link
            className="footer-information nav-links"
            to="reservation"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
          >
            Bize Ulaşın
          </Link>
          <Link
            className="footer-information nav-links"
            to="reservation"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
          >
            Kariyer
          </Link>
        </div>
        <Logo />
        <p className="footer-copyrights md-margin-bottom">
          © {new Date().getFullYear()} YENİ HİSAR GAZİNO - TÜM HAKLARI SAKLIDIR
        </p>
      </div>
    </>
  );
}

export default Footer;
