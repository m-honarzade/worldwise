import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../../contexts/CitiesContext";
import ChangeMapCenter from "./ChangeMapCenter";

const Map = () => {
  // const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  return (
    <div
      // onClick={() => navigate("form")}
      className=" h-[94dvh] w-full bg-[#2d3439]"
    >
      <MapContainer
        // center={mapPosition}
        center={mapPosition}
        zoom={6}
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
        <ChangeMapCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
};

export default Map;
