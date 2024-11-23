import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useReducer, useRef } from "react";
import DataManager from "@/services/datamanager";
import { homeInitialState, homeReducer } from "./state/localState";
import { useFetchCurrencies } from "./hooks/useFetchCoinsHook";
import { CoinByMarketId } from "@/types";
import CurrencyItem from "./components/CurrencyItemCard/Index";

const HomeScreen = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);
  const ref = useRef(null);

  useFetchCurrencies(
    () => DataManager.getCurrencies("vs_currency=usd"), // Fetch function
    (data) =>
      dispatch({ type: "SET_CURRENCIES", payload: { currencies: data } }), // Success callback
    (error) => dispatch({ type: "SET_ERROR", payload: { error } }) // Error callback
  );

  const renderItem = ({ item }: { item: CoinByMarketId }) => {
    return <CurrencyItem data={item} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        ref={ref}
        data={state?.currencies}
        keyExtractor={(item, index) => item?.id?.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
