import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
const CityItem = ({ city }) => {
  return (
    <li>
      <Link
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className="bg-[#42484d] mb-2 border-l-4 rounded-md border-[#00c46a] py-2 px-4 flex flex-row justify-between"
      >
        <div className="text-white flex flex-row gap-3 w-5">
          <img src={city.emoji} alt="" />
          <p className="text-sm">{city.cityName}</p>
        </div>
        <div className="text-white flex flex-row gap-4 ">
          <time className="text-xs flex flex-row">
            ({formatDate(city.date)})
          </time>
          <button className="bg-[#2d3439] rounded-full py-[2px] px-[6px] text-xs">
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
};

export default CityItem;
