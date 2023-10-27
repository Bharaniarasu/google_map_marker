import React from "react";
import Users from "../layout/Users";
import MyComponent from "../layout/GoogleMap";

const Home = () => {
  return (
    <div className="row p-4">
      <div className="col-sm-6 p-3">
        {" "}
        <Users />
      </div>
      <div className="col-sm-6 p-3">
        <MyComponent />
      </div>
    </div>
  );
};

export default Home;
