import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import User from "../container/User";
import "./users.scss";
import { useSelector } from "react-redux";
const Users = () => {
  const { users, loading } = useSelector((state) => state.UsersState);
  console.log(users);
  return (
    <div className="border rounded users">
      {users &&
        users.map((user, index) => (
          <>
            <User {...user} />
          </>
        ))}
    </div>
  );
};

export default Users;
