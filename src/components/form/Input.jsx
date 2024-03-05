const Input = ({ id, label }) => {
  return (
    <div className="flex flex-col w-full gap-1 text-[#d6dee0] items-start ">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="rounded-md p-1 bg-[#d6dee0] w-full"
      />
    </div>
  );
};

export default Input;
