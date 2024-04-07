import { useNavigate, useParams } from "react-router-dom";
import Button from "../form/Button";
import { useCities } from "../../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "../Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCity, currentCity, isLoading } = useCities();
  const { date, cityName, emoji, notes } = currentCity;

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col gap-6 items-start p-6 w-[70%] rounded-md bg-[#42484d] mt-4">
      <div className=" flex flex-col gap-1">
        <h6 className="uppercase text-[#d6dee0] text-[10px]">city name</h6>
        <div className="flex flex-row gap-1 justify-start ">
          <img src={emoji} alt="" className="w-5" />
          <h3 className="text-white font-semibold ">{cityName}</h3>
        </div>
      </div>
      <div className="text-start">
        <h6 className="uppercase text-[#d6dee0] text-[10px] mb-2">
          you went to {cityName} on
        </h6>
        <time className="text-white text-sm md:text-base">{date}</time>
      </div>
      <div className="text-start">
        <h6 className="uppercase text-[#d6dee0] text-[10px] mb-2">
          your notes
        </h6>
        <p className="text-white text-sm md:text-base">{notes}</p>
      </div>
      <div className="">
        <p className="uppercase text-[#d6dee0] text-[10px] mb-2">learn more</p>
        <a className="">{}</a>
      </div>
      <Button
        type={"button"}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
};

export default City;
