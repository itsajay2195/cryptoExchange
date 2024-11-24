interface HomeState {
  currencies: any[];
  error: string;
  page: number;
  hasMore?: boolean;
}

// Define action types
type Action =
  | { type: "SET_CURRENCIES"; payload: { currencies: any[] } }
  | { type: "SET_ERROR"; payload: { error: string } }
  | { type: "SET_PAGE"; payload: { page: number } }
  | { type: "SET_HAS_MORE"; payload: { hasMore: boolean } }
  | { type: "reset" };
