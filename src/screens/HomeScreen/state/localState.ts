// 1. Define the initial state
export const homeInitialState: HomeState = {
  currencies: [],
  copyOfCurrencies: [],
  error: "",
  page: 1,
  hasMore: false,
  searchText: "",
};

// 2. Define the reducer function
export function homeReducer(state: HomeState, action: Action) {
  switch (action.type) {
    case "SET_CURRENCIES":
      return {
        ...state,
        currencies: [...state.currencies, ...action.payload.currencies],
        copyOfCurrencies: [...state.currencies, ...action.payload.currencies],
      };
    case "SET_ERROR":
      return { ...state, error: action.payload.error };
    case "SET_PAGE":
      return { ...state, page: action.payload.page };
    case "SET_HAS_MORE":
      return { ...state, hasMore: action.payload.hasMore };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload.searchText,
      };
    case "reset":
      return homeInitialState;
    default:
      throw new Error("Unknown action type");
  }
}
