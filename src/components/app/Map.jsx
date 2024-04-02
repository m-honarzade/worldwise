import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../../contexts/CitiesContext";
import ChangeMapCenter from "../../hooks/ChangeMapCenter";
import DetectClickOnMap from "../../hooks/DetectClickOnMap";
import UseGeolocation from "../../hooks/UseGeolocation";
import UseUrlPosition from "../../hooks/UseUrlPosition";

const Map = () => {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = UseGeolocation();

  const [mapLat, mapLng] = UseUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <div
      // onClick={() => navigate("form")}
      className=" min-h-screen w-full bg-[#2d3439] "
    >
      {!geolocationPosition && (
        <button
          onClick={getPosition}
          className="uppercase bg-[#00c46a] py-1 px-2 rounded-md text-xs font-medium absolute right-28 bottom-20 z-50"
        >
          {isLoadingPosition ? "...Loading" : "use your position"}
        </button>
      )}
      <MapContainer
        // center={mapPosition}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className="min-h-screen w-full relative z-40 "
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
        <DetectClickOnMap />
      </MapContainer>
    </div>
  );
};

export default Map;
