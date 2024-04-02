const Input = ({ id, label, value = "", emoji = "" }) => {
  return (
    <div className="flex flex-col w-full gap-1 text-[#d6dee0] items-start ">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={`${value}        ${emoji}`}
        className="rounded-md py-1 px-2 bg-[#d6dee0] w-full text-[#333] text-sm font-semibold"
      />
    </div>
  );
};

export default Input;
