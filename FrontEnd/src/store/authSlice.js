import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("idToken");

const authSlice = createSlice({
  name: "auth",
  initialState: { islogin: true, idToken: initialToken, loginStatus: !!initialToken },
  reducers: {
    setIdToken(state, action) {
      state.idToken = action.payload;
    },
    setIsLogin(state) {
      state.islogin = !state.islogin;
    },
    setLoginStatus(state) {
      state.loginStatus = !!state.idToken;
    },
  },
});

export const { setIsLogin, setLoginStatus, setIdToken } = authSlice.actions;

export default authSlice.reducer;
