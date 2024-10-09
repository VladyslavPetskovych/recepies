
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" h-28   flex flex-row  items-center justify-between bg-gradient-to-r from-mainPink1 to-mainPink2  text-lg ">
      <span className="w-36">{/*перший елемент */}</span>
      <Link to="/">
        {" "}
        <span className="relative">
          <img src="" alt="" />
          <p className=" z-10 font-averta font-extrabold text-3xl relative">
            viSoft Steak
          </p>
          <span className="z-0 absolute inset-0 border-4 border-mainPink2 bg-mainPink2 rounded-full w-7 h-7  inline-block"></span>
          <span className="z-0 absolute inset-0 border-4 border-mainPink1 bg-mainPink1 rounded-full w-12 h-12  inline-block ml-16 -mt-1"></span>
        </span>
      </Link>

      <span>
        <button className="p-3 mr-2 bg-btnYellow font-averta font-bold hover:p-3.5">
          <Link to="/saved-meals" className="text-xl">
            Saved Recipes
          </Link>
        </button>
      </span>
    </div>
  );
}

export default Header;
