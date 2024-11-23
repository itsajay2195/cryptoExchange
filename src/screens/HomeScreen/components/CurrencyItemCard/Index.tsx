import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CoinByMarketId } from "@/types";

const CurrencyItem = ({
  data,
  styles,
}: {
  data: CoinByMarketId;
  styles: any;
}) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>{data?.name}</Text>
    </View>
  );
};

export default CurrencyItem;
