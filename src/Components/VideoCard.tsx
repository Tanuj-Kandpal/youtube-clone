import { Link } from "react-router";
import { youtubeApiKey, youtubeEndpoint } from "../../Helpers/helpers";
import useApi from "../hooks/useApi";
import ButtonList from "./ButtonList";
import { Loader } from "./Loader";

function VideoCard() {
  const youtubeApi = youtubeEndpoint + youtubeApiKey;

  const result = useApi(youtubeApi);

  if (result?.items) {
    return (
      <>
        <ButtonList />
        <div className="flex gap flex-wrap">
          {result?.items?.map((curr) => (
            <Link to={`/Watch?v=${curr.id}`} key={curr.id}>
              <div className="cursor-pointer w-64 shadow-xl rounded-2xl p-4">
                <img
                  className="rounded-xl"
                  src={curr.snippet.thumbnails.medium.url}
                  alt="thumbnails images"
                />
                <h2 className="font-bold">{curr.snippet.channelTitle}</h2>
                <h1 className="font-medium overflow-x-clip">
                  {curr.snippet.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
}

export default VideoCard;
