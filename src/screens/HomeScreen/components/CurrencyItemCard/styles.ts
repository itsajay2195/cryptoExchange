import { createThemedStyles } from "@/theme/createThemedStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 120,
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 20,
  },
});

export const useRenderItemCardStyles = createThemedStyles((theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
      height: 120,
      borderRadius: 20,
      padding: 20,
      backgroundColor: theme.colors.background,
    },
  })
);
