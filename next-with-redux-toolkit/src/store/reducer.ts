import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authState, authSlice } from "./auth"

export const DevToolsMode = process.env.NODE_ENV !== "production"

const combinedReducer = combineReducers({
  auth: authSlice.reducer,
})

const initialState = {
  auth: authState,
}

export const store = configureStore({
  reducer: combinedReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: true }),
  devTools: DevToolsMode,
})
