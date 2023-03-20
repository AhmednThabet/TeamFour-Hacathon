import { useFetch } from "hooks";
import React, { useEffect } from "react";

export function ContentWithDraw({ setContent, id }) {
  const { data, isLoading, isError } = useFetch(
    `https://talents-valley-backend.herokuapp.com/api/withdraw/details/${id}`
  );
  useEffect(() => {
    if (!isLoading) {
      console.log("data ==>", data);
      if (data) {
        setContent(data?.withdraw);
      }
    }
  }, [isLoading]);
  return (
    <div className=" flex flex-col  gap-4 ">
      <></>
    </div>
  );
}

export default ContentWithDraw;
