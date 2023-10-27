import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",
  initialState: { loading: false, users: [] },
  reducers: {
    setUsersRequest: (state, action) => {
      return { ...state, loading: true };
    },
    setUsersSuccess: (state, action) => {
      return { ...state, loading: false, users: action.payload };
    },
    setUsersFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});
const { actions, reducer } = UsersSlice;
export const { setUsersRequest, setUsersSuccess, setUsersFailure } = actions;
export default reducer;
