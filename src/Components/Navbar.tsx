import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerModal } from "../../store/hamburgerSlice";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { youtubeSearchEndpoint } from "../../Helpers/helpers";
import { cacheResults } from "../../store/cacheSlice";

function Navbar() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);
  const cacheSelector = useSelector((store) => store.cache);

  function handleHamburger() {
    dispatch(hamburgerModal());
  }

  async function getApiResponse() {
    const data = await fetch(`${youtubeSearchEndpoint}${input}`);
    const value = await data.json();
    setResponse(value[1]);
    dispatch(
      cacheResults({
        [input]: value[1],
      })
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  useEffect(
    function () {
      const timer = setTimeout(function () {
        if (cacheSelector[input]) {
          setResponse[cacheSelector];
        } else {
          getApiResponse();
        }
      }, 200);
      return () => {
        return clearTimeout(timer);
      };
    },
    [input]
  );

  return (
    <>
      <div className="m-7 flex text-[18px] justify-between pl-3 pr-3 items-center">
        {/* Left bar */}
        <div className="flex gap-3 items-center">
          <div>
            <button className="cursor-pointer" onClick={handleHamburger}>
              <RxHamburgerMenu />
            </button>
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
        <div>
          <input
            type="search"
            className={`border-1 text-center rounded-xl w-xl outline-none`}
            placeholder="Search"
            onChange={handleChange}
            onFocus={function () {
              setShowList(true);
            }}
            onBlur={function () {
              setShowList(false);
            }}
            value={input}
          />

          {showList && (
            <div
              className={`bg-white fixed w-[35rem] py-3 shadow-2xl px-5 cursor-pointer`}
            >
              <ul>
                {response.map(function (currValue) {
                  return (
                    <li key={currValue}>
                      <div
                        className={`flex items-center justify-start gap-2 mb-2`}
                      >
                        <IoSearch />
                        {currValue}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        {/* Right Bar */}
        <div className="flex gap-6">
          <div className="">
            <FaRegBell />
          </div>
          <div>
            <CgProfile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
