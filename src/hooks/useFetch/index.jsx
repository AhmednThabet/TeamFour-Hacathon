import { useState } from "react";

export function useFetch() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [finalData, setFinalData] = useState(null);

  const doFetch = async (url, options) => {
    let temp = null;
    try {
      setIsLoading(true);

      const response = await fetch(url, options);
      const data = await response.json();

      setFinalData(data.data);
      temp = data.data;
      console.log("data ===>", data);

      setIsLoading(false);
      setIsError(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
    }
    console.log("fetch");
    return temp;
  };

  return { data: finalData, isError, isLoading, fetch: doFetch };
}

export default useFetch;