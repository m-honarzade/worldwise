import { useAuth } from "../../contexts/AuthFakeApiContext";
import Button from "../form/Button";

const User = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const logOutHandler = () => {
    logOut();
  };
  return (
    <div>
      {/* <img src={user.avatar} alt="" /> */}
      <p>{user.name}</p>
      <Button type="button" onClick={logOutHandler}>
        logout
      </Button>
    </div>
  );
};

export default User;
