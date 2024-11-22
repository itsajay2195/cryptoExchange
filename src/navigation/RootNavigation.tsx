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

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 20}
            style={{ flex: 1 }}
          >
            <ErrorBoundary>
              <Stack.Navigator>
                <Stack.Screen
                  name="HOME_SCREEN"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </ErrorBoundary>
            {/* </NotificationCard> */}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
