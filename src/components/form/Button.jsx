const Button = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type=""
      className={`py-1 px-2 rounded-md text-sm font-medium ${
        type === "submit"
          ? "bg-[#00c46a]"
          : " border border-[#d6dee0] text-[#d6dee0]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
