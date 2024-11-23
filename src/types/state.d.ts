interface HomeState {
  currencies: any[];
  error: string;
}

// Define action types
type Action =
  | { type: "SET_CURRENCIES"; payload: { currencies: any[] } }
  | { type: "SET_ERROR"; payload: { error: string } }
  | { type: "reset" };
