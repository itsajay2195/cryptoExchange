import networkClient from "./networkClient";
import { CoinByMarketId, CoinInfo } from "../types";

export const getCurrencies = async (
  params?: string
): Promise<CoinByMarketId[]> => {
  try {
    let appendedUrl = params ? `/coins/markets?${params}` : `/coins/markets`;
    const response = await networkClient.get(appendedUrl);
    return response.data;
  } catch (error) {
    throw error; // Error handling or logging could go here
  }
};

// Fetch a specific currency by its ID
export const getCurrencyById = async (
  currencyId: string
): Promise<CoinInfo[]> => {
  try {
    const response = await networkClient.get(`/coins/${currencyId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
