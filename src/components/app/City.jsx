import { useParams } from "react-router-dom";

const City = () => {
  const { id } = useParams();
  return <div>City:{id}</div>;
};

export default City;
