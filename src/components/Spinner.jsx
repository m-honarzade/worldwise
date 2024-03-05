const Spinner = () => {
  return (
    <div className="flex flex-col space-x-2 justify-center items-center bg-[#2d3439]  dark:invert mt-5">
      <div className="flex flex-row">
        <div className="h-8 w-8 bg-[#aaa] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-[#aaa] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-[#aaa] rounded-full animate-bounce"></div>
      </div>
      <span className=" text-[#aaa] mt-2">Loading...</span>
    </div>
  );
};

export default Spinner;
