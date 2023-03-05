import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList();
  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>This is example</h1>
    </div>
  );
}

export default App;
