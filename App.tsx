import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import RootNavigation from "@/navigation/RootNavigation";
import useShowSnackBarHook from "@/hooks/useShowSnackBarHook";
import { setupInterceptor } from "@/services/networkClient";
import { SnackBarProvider, useSnackBar } from "@/context/SnackBarContext";
import { useEffect } from "react";

export default function App() {
  return (
    <SnackBarProvider>
      <RootNavigation />
    </SnackBarProvider>
  );
}

registerRootComponent(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
