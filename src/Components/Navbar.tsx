import { FaRegBell } from "react-icons/fa";
import { IoLogoChrome } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <>
      <div className="m-7 flex text-[18px] justify-between pl-3 pr-3 items-center">
        {/* Left bar */}
        <div className="flex gap-3 items-center">
          <div>
            <RxHamburgerMenu />
          </div>
          <div className="flex gap-1 items-center">
            <img
              className="h-10"
              src="src/assets/youtubeicon.png"
              alt="Youtube Logo"
            />
            <span className="font-medium">YOUTUBE</span>
          </div>
        </div>
        {/* Middle bar */}
        <div className="flex items-center ">
          <input
            type="search"
            className="border-1 text-center rounded-xl w-xl outline-none"
            placeholder="Search"
          />
        </div>
        {/* Right Bar */}
        <div className="flex gap-6">
          <div className="]">
            <FaRegBell />
          </div>
          <div>
            <IoLogoChrome />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
