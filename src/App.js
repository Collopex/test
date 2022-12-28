import { Fragment, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/pages/Home";
import Privacy from "./components/pages/Privacy";
import Kvkk from "./components/pages/Kvkk";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/kvkk" element={<Kvkk />} />
      </Routes>
    </Fragment>
  );
}
