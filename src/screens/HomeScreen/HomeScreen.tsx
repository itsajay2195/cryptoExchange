import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useReducer, useRef } from "react";
import DataManager from "@/services/datamanager";
import { homeInitialState, homeReducer } from "./state/localState";
import { useFetchCurrencies } from "./hooks/useFetchCoinsHook";
import { CoinByMarketId } from "@/types";
import CurrencyItem from "./components/CurrencyItemCard/Index";
import { useRenderItemCardStyles } from "./components/CurrencyItemCard/styles";

const ITEM_HEIGHT = 120;
const getItemLayout = (data: any, index: number) => {
  return {
    length: ITEM_HEIGHT, // The height of each item
    offset: ITEM_HEIGHT * index, // The distance of the item from the top
    index, // The index of the item
  };
};

const HomeScreen = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);
  const ref = useRef(null);
  const renderItemCardStyles = useRenderItemCardStyles();
  useFetchCurrencies(
    () => DataManager.getCurrencies("vs_currency=usd"), // Fetch function
    (data) =>
      dispatch({ type: "SET_CURRENCIES", payload: { currencies: data } }), // Success callback
    (error) => dispatch({ type: "SET_ERROR", payload: { error } }) // Error callback
  );

  const renderItem = ({ item }: { item: CoinByMarketId }) => {
    return <CurrencyItem data={item} styles={renderItemCardStyles} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        ref={ref}
        data={state?.currencies}
        keyExtractor={(item, index) => item?.id?.toString()}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
