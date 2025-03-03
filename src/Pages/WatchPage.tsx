import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hamburgerModalOff } from "../../store/hamburgerSlice";
import useApi from "../hooks/useApi";
import { completeYoutubeUrl } from "../../Helpers/helpers";
import { useSearchParams } from "react-router";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Loader from "../Components/Loader";
import Comment from "../Components/Comment";
import { DummyComments } from './../../Helpers/DummyComments';

function WatchPage() {
  const dispatch = useDispatch();

  const [query] = useSearchParams();

  const output = useApi(completeYoutubeUrl);

  const [response, setResponse] = useState({});
  const currentVideoId = query.get("v");
  useEffect(
    function () {
      if (output) {
        setResponse(output);
      }
    },
    [output]
  );

  useEffect(
    function () {
      dispatch(hamburgerModalOff());
    },
    [dispatch]
  );

  if (response?.items) {
    return (
      <>
        <iframe
          width="950"
          height="450"
          src={`https://www.youtube.com/embed/${currentVideoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {response?.items?.map(function (curr) {
          if (curr.id === currentVideoId) {
            return (
              <div>
                <div className="font-bold text-2xl mt-5">
                  {curr?.snippet?.title}
                </div>
                <div className="flex gap-3 mt-3">
                  <div className="font-bold text-xl flex items-center justify-center">
                    {curr?.snippet?.channelTitle}
                    <IoIosCheckmarkCircle />
                  </div>
                  <button className="pt-2 pb-2 pl-3 pr-3 text-white bg-black rounded-4xl cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            );
          }
        })}
        <Comment comments={DummyComments} />
      </>
    );
  } else {
    return <Loader size="large" />;
  }
}

export default WatchPage;
