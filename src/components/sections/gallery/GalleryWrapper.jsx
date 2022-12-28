import GalleryCaption from "./GalleyCaption";
import GalleryImages from "./GalleryImages";
import { Fragment } from "react";

function GalleryWrapper() {
  return (
    <Fragment>
      <GalleryCaption />
      <GalleryImages />
    </Fragment>
  );
}

export default GalleryWrapper;
