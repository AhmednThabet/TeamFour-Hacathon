import axios from "axios";
import { useSWR } from "lib/swr";
import { getCookie } from "lib/js-cookie";
export const useSWRTeam = (url) => {
  const token = getCookie("currentUser").accessToken;
  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    [
      url,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNlMTA0YWE4YmJhMmNiM2Y3NTRkN2RiIiwicm9sZSI6MH0sImV4cCI6MTY3ODkwMDE4MiwiaWF0IjoxNjc4ODEzNzgyfQ.lHs8OzxSKzPn7Y3EV_aLZkkG3x2j_TSVaAJVFAZdsUk",
    ],
    fetcher
  );

  return { data, error, isLoading };
};
