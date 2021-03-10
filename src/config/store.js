import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import billReducer from "./billSlice";

// export const rootReducer = combineReducers({
//   bill: persistReducer({ key: "bill", storage: AsyncStorage }, billReducer),
// });

const rootReducer = persistReducer(
  { key: "bills", storage: AsyncStorage },
  billReducer
);

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export const persistor = persistStore(store);

export default store;
