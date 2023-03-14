import { useState } from "react";

export function useFetch(token, method = "get") {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [finalData, setFinalData] = useState(null);
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNlMTA0YWE4YmJhMmNiM2Y3NTRkN2RiIiwicm9sZSI6MH0sImV4cCI6MTY3ODg2ODQzMSwiaWF0IjoxNjc4NzgyMDMxfQ.lug_trhP9sXIF0xhKWQNY2kFHiHBGyFBRj6Jdcm4djw";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const doFetch = async (url) => {
    let temp = null;
    try {
      setIsLoading(true);

      const response = await fetch(url, { method, headers });
      const data = await response.json();
      setFinalData(data.data);
      temp = data.data;
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
