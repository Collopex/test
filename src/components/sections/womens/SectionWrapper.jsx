import { Fragment } from "react";
import WomenCaption from "./SectionWomens";
import CardSlider from "../../carousels/Card-Slider";

function WomensWrapper() {
  return (
    <Fragment>
      <WomenCaption />
      <CardSlider />
    </Fragment>
  );
}

export default WomensWrapper;
