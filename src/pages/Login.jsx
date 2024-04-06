import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/AuthFakeApiContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { logIn, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  // console.log(isAuthenticated);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email && password) {
      logIn(email, password);
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className="bg-[#2d3439] flex flex-col h-screen ">
      <PageNav />
      <form
        onSubmit={submitHandler}
        className="bg-[#42484d] w-[70%] lg:w-[40%] mx-auto mt-20 rounded-md flex flex-col p-8 gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[#ececec] text-sm">
            Email address
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-2 bg-[#ececec] text-sm rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-[#ececec] text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-2 bg-[#ececec] text-sm rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            className="rounded-md px-2 py-1 text-sm font-semibold text-[#242a2e] bg-[#ececec]"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
