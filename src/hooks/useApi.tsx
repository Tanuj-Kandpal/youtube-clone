import { useEffect, useState } from "react";
function useApi(api: string) {
  const [data, setData] = useState({});

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
