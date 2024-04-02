import { Link } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { position, cityName, emoji, date, id } = city;
  const { currentCity, deleteCity } = useCities();
  console.log(position.lat, position.lng);

  const deleteCityHandler = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`bg-[#42484d] mb-2 border-l-4 rounded-md border-[#00c46a] py-2 px-4 flex flex-row justify-between ${
          +id === +currentCity.id ? "border border-[#00c46a]" : ""
        }`}
      >
        <div className="text-white flex flex-row gap-3 w-5">
          <img src={emoji} alt="" />
          <p className="text-sm text-nowrap">{cityName}</p>
        </div>
        <div className="text-white flex flex-row gap-4 ">
          <time className="text-xs flex flex-row">({formatDate(date)})</time>
          <button
            onClick={deleteCityHandler}
            className="bg-[#2d3439] rounded-full py-[2px] px-[6px] text-xs"
          >
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
};

export default CityItem;
