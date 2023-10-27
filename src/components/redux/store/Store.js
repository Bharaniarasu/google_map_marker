import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../slices/Users";
import UserDataReducer from "../slices/UserData";

const reducer = combineReducers({
  UsersState: UsersReducer,
  UserDataState: UserDataReducer,
});
export default configureStore({
  reducer,
});
