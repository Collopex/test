import { Link } from "react-router-dom";

function PolicyWrapper() {
  return (
    <>
      <Link className="footer-information" to="/privacy">
        Gizlilik Politikası
      </Link>
      <Link className="footer-information" to="/kvkk">
        K.V.K.K
      </Link>
    </>
  );
}

export default PolicyWrapper;
