import { useCities } from "../../contexts/CitiesContext";
import Spinner from "../Spinner";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  // if (!cities.length)
  //   return (
  //     <p>
  //       <span>🖐 </span>Add your first city by clicking on a city on the map.
  //     </p>
  //   );
  const countries = cities.reduce((arry, city) => {
    if (!arry.map((el) => el.country).includes(city.country))
      return [
        ...arry,
        { country: city.country, emoji: city.emoji, id: Math.random() },
      ];
    else return arry;
  }, []);
  return (
    <ul className=" w-[60%] mt-4 grid grid-cols-2 gap-2">
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
};

export default CountryList;
