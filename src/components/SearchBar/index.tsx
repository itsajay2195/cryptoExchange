import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const SearchBar = ({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: any;
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",

        gap: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        margin: 10,
        padding: 14,
      }}
    >
      <View style={{ flex: 1 }}>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={"Search here...."}
        />
      </View>

      <View>
        <EvilIcons name="search" size={24} color="Black" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
