// 1. Define the initial state
export const homeInitialState: HomeState = { currencies: [], error: "" };

// 2. Define the reducer function
export function homeReducer(state: HomeState, action: Action) {
  switch (action.type) {
    case "SET_CURRENCIES":
      return { ...state, currencies: action.payload.currencies };
    case "SET_ERROR":
      return { ...state, error: action.payload.error };
    case "reset":
      return homeInitialState;
    default:
      throw new Error("Unknown action type");
  }
}
