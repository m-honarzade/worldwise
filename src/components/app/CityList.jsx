import { useCities } from "../../contexts/CitiesContext";
import Spinner from "../Spinner";
import CityItem from "./CityItem";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <p>
        <span>🖐 </span>Add your first city by clicking on a city on the map.
      </p>
    );
  return (
    <ul className=" w-[60%] mt-4">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
