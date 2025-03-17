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
import { addChat, liveChat } from "../../store/ChatSlice";
import { getRandomMessage } from "./../../Helpers/DummyChat";
import { ApiOutputState, Messages } from "../../Interfaces/Interfaces";
import { RootState } from "../../store/store";

function WatchPage() {
  const dispatch = useDispatch();
  const messages = useSelector((store: RootState) => store.chat);
  const [query] = useSearchParams();
  const output = useApi(completeYoutubeUrl);
  const [response, setResponse] = useState<ApiOutputState>({ items: [] });
  const [input, setInput] = useState("");
  const currentVideoId = query.get("v");

  //* Since my value is not getting changed so it is okay to cache it to save some memory and using memo make my child component not to rerender even my parents renders
  const comments = useMemo(function () {
    return DummyComments;
  }, []);

  useEffect(
    function () {
      if (output?.items) {
        // Ensure output has valid items array before setting state
        setResponse({
          items: output.items.map(item => ({
            id: item.id || '', // Ensure id is always a string
            snippet: {
              channelId: item.snippet?.channelId || '',
              title: item.snippet?.title || '',
              thumbnails: {
                medium: {
                  url: item.snippet?.thumbnails?.medium?.url || ''
                }
              },
              channelTitle: item.snippet?.channelTitle || ''
            }
          }))
        });
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

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = getRandomMessage();
      dispatch(
        liveChat({
          message: randomMessage.text,
          author: randomMessage.author,
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  function handleAdd() {
    dispatch(
      addChat({
        message: input,
        author: "User",
      })
    );
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    return setInput(e.target.value);
  }

  if (response) {
    return (
      <>
        <div className="flex w-[90vw] mr-7 overflow-hidden p-5 content-between">
          <div className="w-[90%]">
            <iframe
              width="990"
              height="450"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

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
          <div className="w-[40%]">
            <div className="flex h-[90vh] overflow-y-scroll overflow-x-hidden flex-col-reverse">
              {messages.messages
                ? messages.messages?.map(function (message: Messages) {
                    return (
                      <>
                        <LiveChat
                          message={message.message}
                          author={message.author}
                        />
                      </>
                    );
                  })
                : ""}
            </div>
            <div className="flex mt-2">
              <label
                className="pl-4 rounded-2xl inline-block w-full"
                htmlFor=""
              >
                <input
                  placeholder="chat...."
                  className="inline-block w-full rounded-2xl"
                  type="text"
                  value={input}
                  onChange={handleInput}
                />
              </label>
              <button
                className="bg-red-600 p-2 w-[80px] rounded ml-1"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loader size="large" />;
  }
}

export default WatchPage;
