// src/services/dataManager.ts
import * as currencyService from "./currencyService";

export const DataManager = {
  getCurrencies: currencyService.getCurrencies,
  getCurrencyById: currencyService.getCurrencyById,
};

export default DataManager;
