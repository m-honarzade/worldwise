import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import TextErea from "./TextErea";
import UseUrlPosition from "../../hooks/UseUrlPosition";
import { useEffect, useState } from "react";
import Message from "../Message";
import Spinner from "../Spinner";

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

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [emoji, setEmoji] = useState("");
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

  if (isLoadingGeocoding) return <Spinner />;
  if (!lat && !lng)
    return <Message>🖐Start by clicking somewhere on the map.</Message>;

  if (geoCodingError) return <Message>{geoCodingError}</Message>;
  return (
    <form className="flex flex-col gap-4 p-6 bg-[#42484d] w-2/3 mt-4 rounded-md">
      <Input
        label={"City name"}
        id={"cityName"}
        value={cityName}
        emoji={emoji}
      />
      <Input label={"When did you go to?"} id={"tripDate"} />
      <TextErea label={"Notes about your trip to."} id={"TripNote"} />
      <div className="flex flex-row justify-between w-full">
        <Button onClick={() => navigate(-1)} type={"submit"}>
          Add
        </Button>
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
