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
      <View style={styles.titleWrapper}>
        <Text style={{ color: "black", fontWeight: "bold" }}>{data?.name}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {data?.current_price} $
        </Text>
      </View>
    </View>
  );
};

export default CurrencyItem;
