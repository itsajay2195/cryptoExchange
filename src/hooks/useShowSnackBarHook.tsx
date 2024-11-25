import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const useShowSnackBarHook = () => {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackbarMessage, setSnackBarMessage] = useState("");
  return {
    showSnackBar,
    setShowSnackBar,
    snackbarMessage,
    setSnackBarMessage,
  };
};

export default useShowSnackBarHook;

const styles = StyleSheet.create({});
