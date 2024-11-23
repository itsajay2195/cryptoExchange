import React from "react";
import { render } from "@testing-library/react-native";
import CurrencyItem from "./Index";
import { CoinByMarketId } from "@/types";

describe("CurrencyItem Component", () => {
  it("renders correctly with given props", () => {
    const mockData: CoinByMarketId = {
      name: "Bitcoin",
      id: "1",
      symbol: "",
      image: "",
      current_price: 0,
      market_cap: 0,
      market_cap_rank: 0,
      total_volume: undefined,
      last_updated: "",
    };

    const mockStyles = {
      container: {
        padding: 10,
        backgroundColor: "white",
      },
    };

    const { getByText } = render(
      <CurrencyItem data={mockData} styles={mockStyles} />
    );

    // Check if the name is rendered
    expect(getByText("Bitcoin")).toBeTruthy();
  });

  it("applies the correct styles", () => {
    const mockData: CoinByMarketId = {
      name: "Ethereum",
      id: "2",
      symbol: "",
      image: "",
      current_price: 0,
      market_cap: 0,
      market_cap_rank: 0,
      total_volume: undefined,
      last_updated: "",
    };

    const mockStyles = {
      container: {
        padding: 10,
        backgroundColor: "white",
      },
    };

    const { getByText } = render(
      <CurrencyItem data={mockData} styles={mockStyles} />
    );

    const text = getByText("Ethereum");

    // Verify the text color is black (inline style)
    console.log("white writing test>>>", text.props.style);
    expect(text.props.style).toMatchObject({ color: "black" });
  });
});
