import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import calendarReducers from "@/redux/reducers";

const weatherPersistConfig = {
  key: "calendar",
  storage,
};

const store = configureStore({
  reducer: {
    calendarData: persistReducer(weatherPersistConfig, calendarReducers),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch