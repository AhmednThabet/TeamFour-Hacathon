import axios from "axios";
import { useSWR } from "lib/swr";

export const useSWRTeam = (url) => {
  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNkOTE2MGY3YzE3ZDY3MGI1ZDZhNmQ0Iiwicm9sZSI6MX0sImV4cCI6MTY3ODc5ODYyNCwiaWF0IjoxNjc4NzEyMjI0fQ.ThykxOqO0e_LdQtrbgIqtSUVLp0mbPMQYKbmGtMwM90",
        },
      })
      .then((res) => res.data);

  const { data, error } = useSWR(
    [
      url,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNkOTE2MGY3YzE3ZDY3MGI1ZDZhNmQ0Iiwicm9sZSI6MX0sImV4cCI6MTY3ODc5ODYyNCwiaWF0IjoxNjc4NzEyMjI0fQ.ThykxOqO0e_LdQtrbgIqtSUVLp0mbPMQYKbmGtMwM90",
    ],
    fetcher
  );

  return { data, error };
};
