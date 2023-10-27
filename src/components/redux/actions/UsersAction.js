import axios from "axios";
import {
  setUsersRequest,
  setUsersSuccess,
  setUsersFailure,
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
} from "../slices/Users";
import {
  setUserDataFailure,
  setUserDataRequest,
  setUserDataSuccess,
} from "../slices/UserData";

export const setUsersData = async (dispatch) => {
  const url = `https://dummyjson.com/users`;
  dispatch(setUsersRequest());
  try {
    const { data } = await axios.get(url);
    dispatch(setUsersSuccess(data.users));
  } catch (err) {
    console.error(`Error in User data fetching - ${err}`);
    setUsersFailure(err);
  }
};

export const setUserData = (user) => async (dispatch) => {
  dispatch(setUserDataRequest());
  try {
    dispatch(setUserDataSuccess(user));
  } catch (err) {
    console.error(`Error in User data fetching - ${err}`);
    setUserDataFailure(err);
  }
};
