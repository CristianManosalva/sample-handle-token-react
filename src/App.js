import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import { history } from "./_helpers";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "./_accions";
import { Router } from "react-router";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div className="App">
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <Router history={history}>
        <NavBar />
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </Router>
    </div>
  );
}

export default App;
