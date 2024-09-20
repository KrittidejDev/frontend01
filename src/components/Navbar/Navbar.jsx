import { useState, setState } from "react";
import brandLogo from "../../assets/brand_logo.png";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="container h-[72px] p-4 md:pt-4">
        <div className="flex flex-row justify-between align-center items-center w-full">
          <div className=" ">
            {/* logo section */}
            <img src={brandLogo} alt="" />
          </div>

          {/* Link section */}
          <div>
            <ul className="hidden md:flex gap-6 text-[#2E2E2E] font-semibold text-md ">
              <a href="/#">MENU</a>
              <a href="/#">LOCATION</a>
              <a href="/#">ABOUT</a>
              <a href="/#">CONTACT</a>
            </ul>
          </div>
          <div className="">
            <button className="hidden md:flex rounded-xl align-center py-1 w-17 h-8 p-6 bg-[#D01C28] text-white  ">
              LOGIN
            </button>
            <button className="md:hidden " onClick={handleToggleMenu}>
              <MdMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-10 right-10 bg-gray-600 bg-opacity-40 z-50 pt-5 rounded-3xl w-[50%] h-auto p-2">
          <button
            className="absolute top-0 right-0 p-2"
            onClick={handleToggleMenu}
          >
            <IoMdClose />
          </button>
          <ul className="flex flex-col space-y-4 mt-4 text-white items-center  ">
            <li
              onClick={handleToggleMenu}
              className="hover:text-gray-300 hover:bg-red-500 hover:rounded-2xl w-full text-center "
            >
              <a href="#">MENU</a>
            </li>
            <li
              onClick={handleToggleMenu}
              className="hover:text-gray-300 hover:bg-red-500 hover:rounded-2xl w-full text-center "
            >
              <a href="#">LOCATION</a>
            </li>
            <li
              onClick={handleToggleMenu}
              className="hover:text-gray-300 hover:bg-red-500 hover:rounded-2xl w-full text-center "
            >
              <a href="#">ABOUT</a>
            </li>
            <li
              onClick={handleToggleMenu}
              className="hover:text-gray-300 hover:bg-red-500 hover:rounded-2xl w-full text-center "
            >
              <a href="#">CONTACT</a>
            </li>
            <li onClick={handleToggleMenu} className=" w-full text-center ">
              <a href="#"></a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// Image: image;
