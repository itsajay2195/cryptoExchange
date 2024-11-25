// src/hooks/useOfflineDetector.ts
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useNavigation } from "@react-navigation/native"; // If using React Navigation

const useOfflineDetector = ({ navigation }: any) => {
  //   const [isOffline, setIsOffline] = useState(false);
  // Use navigation to redirect to Error Boundary screen

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // Set offline status based on network state
      if (!state.isConnected) {
        // setIsOffline(true);
        // Optionally navigate to an Error Boundary screen when offline
        navigation.navigate("OFFLINE_SCREEN"); // Assuming 'ErrorBoundary' is a screen in your navigator
      } else {
        navigation.navigate("HOME_SCREEN");
      }
    });

    return () => unsubscribe();
  }, [navigation]);
};

export default useOfflineDetector;
