import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("form")}
      className="flex flex-col justify-between items-center text-center pt-4 h-[94dvh] bg-[#2d3439]"
    >
      position - lat:{lat} lng:{lng}
    </div>
  );
};

export default Map;
