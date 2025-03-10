import { useEffect, useState } from "react";
function useApi(api: string) {

  type VideoItem = {
    id?: string;
    snippet?: {
      channelId?: string;
      title?: string;
      thumbnails?: { medium?: { url?: string } };
      channelTitle?: string;
    };
  };

  type ApiOutputState = {
    items: VideoItem[];
  };
  const [data, setData] = useState<ApiOutputState>({ items: [] });


  async function fetching() {
    try {
      const result = await fetch(api);
      const response = await result.json();
      setData(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(function () {
    fetching();
  }, []);
  return data;
}

export default useApi;


