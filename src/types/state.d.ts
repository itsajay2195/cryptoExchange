interface HomeState {
  currencies: any[];
  copyOfCurrencies: any[];
  error: string;
  page: number;
  hasMore?: boolean;
  searchText: string;
}

// Define action types
type Action =
  | { type: "SET_CURRENCIES"; payload: { currencies: any[] } }
  | { type: "SET_ERROR"; payload: { error: string } }
  | { type: "SET_PAGE"; payload: { page: number } }
  | { type: "SET_HAS_MORE"; payload: { hasMore: boolean } }
  | { type: "SET_SEARCH_TEXT"; payload: { searchText: string } }
  | { type: "reset" };
