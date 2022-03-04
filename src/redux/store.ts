import { configureStore } from "@reduxjs/toolkit";
import { HarryPotterApi } from "./api";
import utilReducer from "./util.reducer";
export const store = configureStore({
  reducer: {
    [HarryPotterApi.reducerPath]: HarryPotterApi.reducer,
    util: utilReducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(HarryPotterApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

