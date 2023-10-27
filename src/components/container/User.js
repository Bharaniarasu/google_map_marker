import React from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/actions/UsersAction";
import "./user.scss";
const User = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="card m-2 user_card"
      onClick={() => dispatch(setUserData(props))}
    >
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-3">
            <img
              src={props.image}
              alt={props.username}
              className="w-50 bg-primary rounded-circle"
            />
          </div>
          <div className="col-6">
            <h5>{`${props.firstName} ${props.lastName}`}</h5>
            <p>{props.email}</p>
          </div>
          <div className="col-3">
            <small className="d-flex no-wrap">{`Age - ${props.age}`}</small>
            <small className="d-flex no-wrap">{`Blood - ${props.bloodGroup}`}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
