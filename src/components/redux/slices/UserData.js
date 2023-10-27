import { createSlice } from "@reduxjs/toolkit";

export const UserDataSlice = createSlice({
  name: "userData",
  initialState: { loading: false, userData: null },
  reducers: {
    setUserDataRequest: (state, action) => {
      return { ...state, loading: true };
    },
    setUserDataSuccess: (state, action) => {
      return { loading: false, userData: action.payload };
    },
    setUserDataFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});
const { actions, reducer } = UserDataSlice;
export const { setUserDataRequest, setUserDataSuccess, setUserDataFailure } =
  actions;
export default reducer;
