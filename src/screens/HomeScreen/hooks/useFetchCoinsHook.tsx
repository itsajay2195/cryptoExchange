import { useEffect } from "react";

type FetchCurrencies = (page: number) => Promise<any>;
type OnSuccess = (data: any[]) => void;
type OnError = (error: string) => void;

export const useFetchCurrencies = (
  fetchCurrencies: FetchCurrencies,
  onSuccess: OnSuccess,
  onError: OnError,
  page = 1,
  dependencies: any[] = []
) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const supportedCoins = await getSupportedCurrencies();
        console.log("page");
        const data = await fetchCurrencies(page);
        onSuccess(data);
      } catch (error) {
        console.error(error);
        onError("Something went wrong, try again later.");
      }
    };

    fetchData();
  }, [...dependencies]);
};
