import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import TextErea from "./TextErea";
import UseUrlPosition from "../../hooks/UseUrlPosition";
import { useEffect, useState } from "react";
import Message from "../Message";
import Spinner from "../Spinner";
import DatePicker from "react-datepicker";
// import "./customDatePickerWidth.css";

import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../../contexts/CitiesContext";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Form = () => {
  const navigate = useNavigate();
  const [lat, lng] = UseUrlPosition();
  const { createCity, isLoading } = useCities();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("");
  const [notes, setNotes] = useState("");

  const [geoCodingError, setGeoCodingError] = useState("");

  useEffect(() => {
    if (!lat && !lng) return;
    const fetchCityData = async () => {
      try {
        setIsLoadingGeocoding(true);
        setGeoCodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);
        if (!data.countryCode)
          throw new Error(
            "🖐that doesn't seem to be a city. Click somewhere else 😉"
          );
        setCityName(data.city || data.locality || "");
        setCountryName(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        setGeoCodingError(error.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    };
    fetchCityData();
  }, [lat, lng]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      countryName,
      date,
      emoji,
      notes,
      position: { lat, lng },
    };
    console.log(newCity);
    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoadingGeocoding) return <Spinner />;
  if (!lat && !lng)
    return <Message>🖐Start by clicking somewhere on the map.</Message>;

  if (geoCodingError) return <Message>{geoCodingError}</Message>;
  return (
    <form
      onSubmit={submitHandler}
      className={`flex flex-col gap-4 p-6 bg-[#42484d] w-2/3 mt-4 rounded-md ${
        isLoading ? "opacity-25" : ""
      }`}
    >
      <Input
        label={"City name"}
        id={"cityName"}
        value={cityName}
        emoji={emoji}
      />
      <div className="flex flex-col w-full gap-1 text-[#d6dee0] items-start">
        <label htmlFor="datePicker" className="text-sm font-medium w-full">
          When did you go to {cityName}
        </label>
        <div>
          <DatePicker
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
            id="datePicker"
            className="rounded-md  py-1 px-2 bg-[#d6dee0]  text-[#333] text-sm font-semibold"
          />
        </div>
      </div>
      {/* <Input label={"When did you go to?"} id={"tripDate"} /> */}
      <TextErea
        label={"Notes about your trip to."}
        id={"TripNote"}
        value={notes}
        setValue={setNotes}
      />
      <div className="flex flex-row justify-between w-full">
        <Button type={"submit"}>Add</Button>
        <Button
          type={"button"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/app");
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
};

export default Form;
