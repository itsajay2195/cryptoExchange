import { createThemedStyles } from "@/theme/createThemedStyles";
import { StyleSheet } from "react-native";

export const useRenderItemCardStyles = createThemedStyles((theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      marginHorizontal: 10,
      height: 70,
      borderRadius: 20,
      padding: 20,
      backgroundColor: theme.colors.background,
      marginBottom: 10,
    },
    titleWrapper: {
      flex: 1,
      justifyContent: "center",
    },
    priceWrapper: {
      display: "flex",
      justifyContent: "center",
      paddingHorizontal: "auto",
    },
  })
);
