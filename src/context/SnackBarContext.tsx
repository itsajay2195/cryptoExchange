import React, { createContext, useContext, useState, ReactNode } from "react";
import { View, Text } from "react-native";

type SnackBarContextType = {
  triggerSnackBar: (message: string) => void;
};

const SnackBarContext = createContext<SnackBarContextType | undefined>(
  undefined
);

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  const [snackBarMessage, setSnackBarMessage] = useState<string | null>(null);

  const triggerSnackBar = (message: string) => {
    setSnackBarMessage(message);
    setTimeout(() => setSnackBarMessage(null), 3000); // Automatically dismiss after 3 seconds
  };

  return (
    <SnackBarContext.Provider value={{ triggerSnackBar }}>
      <View style={{ flex: 1 }}>
        {children}
        {snackBarMessage && (
          <View
            style={{
              position: "absolute",
              borderRadius: 20,
              zIndex: 100,
              padding: 10,
              bottom: 20,
              left: 20,
              right: 20,
              backgroundColor: "red",
            }}
          >
            <Text style={{ color: "white" }}>{snackBarMessage}</Text>
          </View>
        )}
      </View>
    </SnackBarContext.Provider>
  );
};

export const useSnackBar = (): SnackBarContextType => {
  const context = useContext(SnackBarContext);
  if (!context) {
    throw new Error("useSnackBar must be used within a SnackBarProvider");
  }
  return context;
};
