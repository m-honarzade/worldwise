import { useAuth } from "../../contexts/AuthFakeApiContext";
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  console.log(user);
  const logOutHandler = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="bg-[#333] text-white flex flex-row py-2 px-6 rounded-md text-xs font-semibold gap-4 items-center ">
      <img src={user.avatar} alt="userImage" className="w-10 rounded-full" />
      <p>
        <span>Welcome, </span>
        {user.name}
      </p>
      <Button type="button" onClick={logOutHandler}>
        logout
      </Button>
    </div>
  );
};

export default User;
