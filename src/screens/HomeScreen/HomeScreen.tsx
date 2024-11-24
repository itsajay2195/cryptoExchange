import { FlatList, StyleSheet, View } from "react-native";
import React, { useCallback, useReducer, useRef } from "react";
import DataManager from "@/services/datamanager";
import { homeInitialState, homeReducer } from "./state/localState";
import { useFetchCurrencies } from "./hooks/useFetchCoinsHook";
import { CoinByMarketId } from "@/types";
import CurrencyItem from "./components/CurrencyItemCard/Index";
import { useRenderItemCardStyles } from "./components/CurrencyItemCard/styles";
import SearchBar from "@/components/SearchBar";

const ITEM_HEIGHT = 70;
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
    (page) =>
      DataManager.getCurrencies(`vs_currency=usd&per_page=10&page=${page}`), // Fetch function,
    (data) =>
      dispatch({ type: "SET_CURRENCIES", payload: { currencies: data } }), // Success callback
    (error) => dispatch({ type: "SET_ERROR", payload: { error } }), // Error callback
    state.page,
    [state?.page]
  );

  const onEndReached = useCallback(() => {
    dispatch({ type: "SET_PAGE", payload: { page: state.page + 1 } });
  }, [state?.page]);

  const renderItem = ({ item }: { item: CoinByMarketId }) => {
    return <CurrencyItem data={item} styles={renderItemCardStyles} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingVertical: 10 }}>
      <FlatList
        ref={ref}
        ListHeaderComponent={SearchBar}
        data={state?.currencies}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
