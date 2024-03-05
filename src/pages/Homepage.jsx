import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <div className="px-4 pt-4">
      <main
        className=" flex flex-col items-center text-center w-full h-[94dvh]   bg-[url('../../public/images/bg.jpg')]  bg-cover bg-center relative
        overflow-hidden
        
        z-10
          before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-[#242a2ecc]
            before:to-[#242a2ecc]
            
            before:z-[-5] "
      >
        <PageNav />
        <section className="w-[85%] md:w-[60%] mt-16">
          <h1 className="text-[#f8feff] text-3xl font-bold">
            You travel the world.
            <br />
            WorldWise keeps track of your adventures.
          </h1>
          <h2 className="text-[#aaa] mt-8">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
        </section>
        <Link
          to="/app"
          className="mt-10 text-[#242a2e] uppercase px-3 md:px-5 py-2 bg-[#00c46a] rounded-md text-xs font-bold"
        >
          Start tracking now
        </Link>
      </main>
    </div>
  );
};

export default Homepage;
