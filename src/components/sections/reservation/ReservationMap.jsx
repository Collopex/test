import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function ReservationMap() {
  const LeafIcon = L.Icon.extend({
    options: {},
  });
  const blueIcon = new LeafIcon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 36],
  });
  return (
    <div className="reservation-map">
      <MapContainer
        center={[40.18303, 29.0682]}
        zoom={15.8}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        maxZoom={17.9}
        minZoom={14}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={[40.1832, 29.06815]} icon={blueIcon}>
          <Popup>
            <h2>YENİ HİSAR GAZİNOSU</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ReservationMap;
