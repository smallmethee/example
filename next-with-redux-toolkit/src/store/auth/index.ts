import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { featureKey } from "../featureKey"

type AuthState = {
  token: string | null
  logged: boolean | null
}

export const authState: AuthState = {
  token: null,
  logged: null,
}

export const authSlice = createSlice({
  name: featureKey.AUTH,
  initialState: authState,
  reducers: {
    setToken: (
      state: Pick<AuthState, "token" | "logged">,
      { payload }: PayloadAction<AuthState["token"]>
    ) => {
      state.logged = !!payload
      state.token = payload
    },
    setLogged: (
      state: Pick<AuthState, "logged">,
      { payload }: PayloadAction<AuthState["logged"]>
    ) => {
      state.logged = payload
    },
    setLogout: (state: Pick<AuthState, "token" | "logged">) => {
      window.localStorage.setItem("token", "")
      state.logged = false
      state.token = null
    },
  },
})

export const authActions = {
  ...authSlice.actions,
}
