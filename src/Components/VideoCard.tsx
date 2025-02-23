import { youtubeApiKey, youtubeEndpoint } from "../../Helpers/helpers";
import useApi from "../hooks/useApi";
import { Loader } from "./Loader";

function VideoCard() {
  const youtubeApi = youtubeEndpoint + youtubeApiKey;

  const result = useApi(youtubeApi);

  if (result?.items) {
    // const { id, snippet } = result?.items;
    // const { title, description, thumbnails } = snippet;
    // const { highImage } = thumbnails;
    return (
      <>
        {result?.items?.map((curr) => (
          <div
            key={curr.id}
            className="cursor-pointer w-64 shadow-xl rounded-2xl p-4"
          >
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
        ))}
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
