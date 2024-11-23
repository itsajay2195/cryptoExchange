import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CoinByMarketId } from "@/types";
import { styles } from "./styles";

const CurrencyItem = ({ data }: { data: CoinByMarketId }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{data?.name}</Text>
    </View>
  );
};

export default CurrencyItem;
