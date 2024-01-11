import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import adminReducer from "./admin/adminSlice.js";
import serviceReducer from "./service/serviceSlice.js";
import reviewReducer from "./reviews/reviewsSlice.js"
import appointmentReducer from "./appointments/appointmentsSlice.js"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  services: serviceReducer,
  review:reviewReducer,
  appointment: appointmentReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
