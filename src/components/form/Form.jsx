import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import TextErea from "./TextErea";

const Form = () => {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col gap-4 p-6 bg-[#42484d] w-2/3 mt-4 rounded-md">
      <Input label={"City name"} id={"cityName"} />
      <Input label={"When did you go to?"} id={"tripDate"} />
      <TextErea label={"Notes about your trip to."} id={"TripNote"} />
      <div className="flex flex-row justify-between w-full">
        <Button onClick={() => navigate("-1")} type={"submit"}>
          Add
        </Button>
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
    </form>
  );
};

export default Form;
