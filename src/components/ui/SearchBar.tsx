import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center border rounded-lg px-4 h-9">
      {/* <div className="relative"> */}
      <div className="">
        <CiSearch />
      </div>
      <input
        type="text"
        className="h-9 w-60 pr-8 pl-5 rounded focus:shadow-none focus:outline-none"
        placeholder="Search..."
      />

      {/* </div> */}
    </div>
  );
};

export default SearchBar;
