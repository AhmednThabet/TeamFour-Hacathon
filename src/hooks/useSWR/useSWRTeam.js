import axios from "axios";
import { useSWR } from "lib/swr";
import { useCurrentUser } from "features/authentication";
import { getCookie } from "lib/js-cookie";


export const useSWRTeam = (url) => {
  const { user } = useCurrentUser();
  const token = getCookie("currentUser").accessToken;
  const fetcher = (url) => {
    axios
      .get(url, {
        Authorization:
          `Bearer ${token}`
      })
      .then((res) => res.data);
  }

  const { data, error, isLoading } = useSWR(
    [
      url,
      token,
    ],
    fetcher
  );

  return { data, error, isLoading };
};

export default useSWRTeam;
