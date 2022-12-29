/* eslint-disable import/no-webpack-loader-syntax */
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
mapboxgl.accessToken =
  "pk.eyJ1IjoiY29sbG9wZXgiLCJhIjoiY2xjMHkycTdkMWVydDN4bzU5cHd6MDVrYSJ9.zpgSTi6sbASwodozDEqo9g";

export default function ReservationMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(29.067617);
  const [lat, setLat] = useState(40.183039);
  const [zoom, setZoom] = useState(17);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/collopex/clc113ej7001014lm3lk6p7zp",
      center: [lng, lat],
      zoom: zoom,
      doubleClickZoom: true,
      maxZoom: 17.5,
      minZoom: 15,
      worldview: false,
      dragRotate: false,
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
