import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../../contexts/CitiesContext";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const navigate = useNavigate();
  const { cities } = useCities();
  return (
    <div
      onClick={() => navigate("form")}
      className=" h-[94dvh] w-full bg-[#2d3439]"
    >
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[94dvh] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup
              style={{ backgroundColor: "#42484d" }}
              className=" bg-[#42484d] mb-2 border-l-4 rounded-md border-[#00c46a] p-1"
            >
              <div className="flex flex-row gap-2">
                <img className="w-4" src={city.emoji} alt="" />
                <span>{city.cityName}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
