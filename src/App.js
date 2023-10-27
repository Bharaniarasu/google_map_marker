import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsersData } from "./components/redux/actions/UsersAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsersData);
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
