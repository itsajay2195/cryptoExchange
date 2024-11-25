import {
  Platform,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./NavigationUtils";
import HomeScreen from "@/screens/HomeScreen/HomeScreen";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/theme/ThemeProvider";
import OfflineScreen from "@/screens/OfflineScreen/OfflineScreen";
import useOfflineDetector from "@/hooks/useOfflineDetector";
import NetInfoWrapper from "@/HOC/NetInfoWrapper";

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  // useOfflineDetector();
  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 20}
              style={{ flex: 1 }}
            >
              <ErrorBoundary>
                <NetInfoWrapper>
                  <Stack.Navigator>
                    <Stack.Screen
                      name="HOME_SCREEN"
                      component={HomeScreen}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="OFFLINE_SCREEN"
                      component={OfflineScreen}
                      options={{ headerShown: false }}
                    />
                  </Stack.Navigator>
                </NetInfoWrapper>
              </ErrorBoundary>
              {/* </NotificationCard> */}
            </KeyboardAvoidingView>
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
