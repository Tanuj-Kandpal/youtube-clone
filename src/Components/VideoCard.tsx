import { Link } from "react-router";
import { youtubeApiKey, youtubeEndpoint } from "../../Helpers/helpers";
import useApi from "../hooks/useApi";
import ButtonList from "./ButtonList";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { ApiOutputState } from "../../Interfaces/Interfaces";

function VideoCard() {
  const youtubeApi = youtubeEndpoint + youtubeApiKey;

  const [apiOutput, setApiOutput] = useState<ApiOutputState>({ items: [] });

  const result = useApi(youtubeApi);

  useEffect(
    function () {
      setApiOutput(result);
    },
    [result]
  );

  if (apiOutput) {
    return (
      <>
        <div className="flex gap-5 flex-wrap">
          <ButtonList />
          <div className="flex gap-5 flex-wrap">
            {apiOutput?.items?.map((curr) => (
              <Link to={`/Watch?v=${curr?.id}`} key={curr?.id}>
                <div className="cursor-pointer w-64 shadow-xl rounded-2xl p-4">
                  <img
                    className="rounded-xl"
                    src={curr?.snippet?.thumbnails?.medium?.url}
                    alt="thumbnails images"
                  />
                  <h2 className="font-bold">{curr?.snippet?.channelTitle}</h2>
                  <h1 className="font-medium overflow-x-clip">
                    {curr?.snippet?.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex content-center items-center">
          <Loader size="large" />
        </div>
      </>
    );
  }
}

//* Just for practice its an Higher order component which takes in a VideoCard as a component and return a new border one.

// export function AdVideoCard() {
//   return (
//     <>
//       <div className="border-yellow-950 border-solid border-2 ">
//         <VideoCard />
//       </div>
//     </>
//   );
// }

export default VideoCard;
