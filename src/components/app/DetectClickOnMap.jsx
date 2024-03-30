import { useMapEvent } from "react-leaflet";
import { useNavigate } from "react-router-dom";

const DetectClickOnMap = () => {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
};

export default DetectClickOnMap;
