import { useState } from "react";
import PageNav from "../components/PageNav";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  return (
    <main className="bg-[#2d3439] flex flex-col h-screen ">
      <PageNav />
      <form className="bg-[#42484d] w-[70%] lg:w-[40%] mx-auto mt-20 rounded-md flex flex-col p-8 gap-4">
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
          <button className="rounded-md px-2 py-1 text-sm font-semibold text-[#242a2e] bg-[#ececec]">
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
