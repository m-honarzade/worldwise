const CountryItem = ({ country }) => {
  return (
    <li className="bg-[#42484d] mb-2 border-l-4 rounded-md border-[#c46f00] flex justify-center py-1 px-3">
      <div className="text-white flex flex-col gap-1 w-5 items-center">
        <img src={country.emoji} alt="" />
        <p className="text-sm">{country.country}</p>
      </div>
    </li>
  );
};

export default CountryItem;
