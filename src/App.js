import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./config/store";
import Navigator from "./Navigator";
import ThemeManager from "./components/ThemeManager";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeManager>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </ThemeManager>
      </PersistGate>
    </Provider>
  );
}
