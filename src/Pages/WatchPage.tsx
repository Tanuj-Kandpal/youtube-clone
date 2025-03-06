import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerModalOff } from "../../store/hamburgerSlice";
import useApi from "../hooks/useApi";
import { completeYoutubeUrl } from "../../Helpers/helpers";
import { useSearchParams } from "react-router";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Loader from "../Components/Loader";
import Comment from "../Components/Comment";
import { DummyComments } from "./../../Helpers/DummyComments";
import LiveChat from "../Components/LiveChat";
import { addChat } from "../../store/ChatSlice";
import randomMessage from "./../../Helpers/DummyChat";

function WatchPage() {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat);
  console.log(messages);

  const [query] = useSearchParams();

  const output = useApi(completeYoutubeUrl);

  const [response, setResponse] = useState({});
  const currentVideoId = query.get("v");

  //* Since my value is not getting changed so it is okay to cache it to save some memorya and useing memo make my child component not to rerender even my parents renders
  const comments = useMemo(function () {
    return DummyComments;
  }, []);

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(
  //       addChat({
  //         message: randomMessage.text,
  //         author: randomMessage.author,
  //       })
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  if (response?.items) {
    return (
      <>
        <div className="flex w-[90vw] mr-7 overflow-hidden p-5 content-between">
          <div className="w-[90%]">
            <iframe
              width="950"
              height="450"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
            ></iframe>
            {response?.items?.map(function (curr) {
              if (curr.id === currentVideoId) {
                return (
                  <div className="w-[950px]">
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
            <Comment comments={comments} />
          </div>
          <div className="w-[40%] border-2 border-amber-700 h-[90vh overflow-y-scroll">
            {messages.messages
              ? messages.messages?.map(function (message) {
                  return <LiveChat messages={message} />;
                })
              : ""}
          </div>
        </div>
      </>
    );
  } else {
    return <Loader size="large" />;
  }
}

export default WatchPage;
