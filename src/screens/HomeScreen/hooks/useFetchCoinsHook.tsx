import { useEffect } from "react";

type FetchCurrencies = () => Promise<any>;
type OnSuccess = (data: any[]) => void;
type OnError = (error: string) => void;

export const useFetchCurrencies = (
  fetchCurrencies: FetchCurrencies,
  onSuccess: OnSuccess,
  onError: OnError
) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrencies();
        onSuccess(data);
      } catch (error) {
        console.error(error);
        onError("Something went wrong, try again later.");
      }
    };

    fetchData();
  }, []);
};
