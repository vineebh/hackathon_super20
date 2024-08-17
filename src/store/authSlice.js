import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { islogin: true },
  reducers: {
    setIsLogin(state) {
      state.islogin = !state.islogin;
    },
  },
});
export const { setIsLogin } = authSlice.actions;

export default authSlice.reducer;
