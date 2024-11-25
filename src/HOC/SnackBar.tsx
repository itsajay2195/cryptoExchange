import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import useShowSnackBarHook from "@/hooks/useShowSnackBarHook";

const SnackBar = ({ children, message }: any) => {
  let timer: any;
  const { showSnackBar, setShowSnackBar } = useShowSnackBarHook();
  useEffect(() => {
    if (showSnackBar) {
      timer = setTimeout(() => {
        setShowSnackBar(false);
      }, 3000);
    }
  }, [showSnackBar]);

  const onDismissPressed = useCallback(() => {
    if (timer) clearTimeout(timer);
    setShowSnackBar(false);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {showSnackBar ? (
        <View
          style={{
            position: "absolute",
            borderRadius: 20,
            zIndex: 100,
            padding: 10,
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            margin: 20,
            backgroundColor: "red",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white" }}>
              {message || "Something went wrong please try again later"}
            </Text>
          </View>

          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity onPress={onDismissPressed}>
              <Text>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {children}
    </View>
  );
};

export default SnackBar;

const styles = StyleSheet.create({});
