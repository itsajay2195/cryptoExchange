import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const NetInfoWrapper = ({ children }: any) => {
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    // Initial fetch to check network status
    const fetchInitialState = async () => {
      const state = await NetInfo.fetch();
      setIsOffline(!state.isConnected || !state.isInternetReachable);
    };
    fetchInitialState();

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOffline(!state.isConnected || !state.isInternetReachable);
    });

    return () => unsubscribe();
  }, []);

  const onRetry = async () => {
    const state = await NetInfo.fetch();
    setIsOffline(!state.isConnected || !state.isInternetReachable);
  };

  return (
    <View style={{ flex: 1 }}>
      {children}

      {isOffline ? (
        <Modal
          visible={isOffline}
          transparent={true} // Makes the modal background transparent
          animationType="slide" // Options: 'none', 'slide', 'fade'
          onRequestClose={() => setIsOffline(true)} // Handles the back button press
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>
                You're offline, please connect to the internet and try again
              </Text>

              <TouchableOpacity style={styles.closeButton} onPress={onRetry}>
                <Text style={styles.closeButtonText}>Try again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

export default NetInfoWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent black background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});
