import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hamburgerModalOff } from "../../store/hamburgerSlice";
import useApi from "../hooks/useApi";
import { completeYoutubeUrl } from "../../Helpers/helpers";
import { useSearchParams } from "react-router";

function WatchPage() {
  const dispatch = useDispatch();

  const [query] = useSearchParams();

  const output = useApi(completeYoutubeUrl);

  const [response, setResponse] = useState({});
  const currentVideoId = query.get("v");
  useEffect(
    function () {
      if (output.items) {
        setResponse(output.items);
      }
    },
    [output.items]
  );

  useEffect(
    function () {
      dispatch(hamburgerModalOff());
    },
    [dispatch]
  );

  if (response) {
    return (
      <>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${currentVideoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>This is the watch Page</p>
      </>
    );
  } else {
    return " ";
  }
}

export default WatchPage;
