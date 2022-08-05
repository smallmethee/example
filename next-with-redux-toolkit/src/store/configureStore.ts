import {
  Action,
  Store,
  EnhancedStore,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit"
import { Context, createWrapper } from "next-redux-wrapper"
import { store } from "./reducer"

export const DevToolsMode = process.env.NODE_ENV !== "production"

export type ThunkActionType<T = Promise<void>> = ThunkAction<
  T,
  RootState,
  null,
  Action<string>
>
export type ThunkDispatchType = ThunkDispatch<RootState, any, Action<string>>
export type StoreType = Store<RootState, Action<string>> & {
  dispatch: ThunkDispatchType
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// eslint-disable-next-line no-unused-vars
const makeStore = (_context: Context): EnhancedStore<RootState> => store

export const wrapper = createWrapper(makeStore, {
  debug: DevToolsMode,
})
