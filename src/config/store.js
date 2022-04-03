import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import billReducer from "./billSlice";
import themeReducer from "./themeSlice";
import instructionsReducer from "./instructionsSlice";
import dateReducer from "./dateSlice";

const rootReducer = combineReducers({
  bills: persistReducer({ key: "bills", storage: AsyncStorage }, billReducer),
  theme: persistReducer({ key: "theme", storage: AsyncStorage }, themeReducer),
  instructions: persistReducer({ key: "instructions", storage: AsyncStorage }, instructionsReducer),
  date: persistReducer({ key: "date", storage: AsyncStorage }, dateReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export const persistor = persistStore(store);

export default store;
