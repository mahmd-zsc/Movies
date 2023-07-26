import React, { useEffect } from "react";
import "./App.css";
import { Router } from "react-router";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import WatchedList from "./components/WatchedList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import Header from "./components/header";
import axios from "axios";
import { Provider, useSelector } from "react-redux";
import { store } from "./components/redux/store";

function App() {
  let data = useSelector((state: any) => state);
  let watched = useSelector((state: any) => state.watched);
  let watchedList = useSelector((state: any) => state.watchedList);

  useEffect(() => {
    window.localStorage.watched = JSON.stringify(watched);
    window.localStorage.watchedList = JSON.stringify(watchedList);
  }, [data]);

  return (
    <div className="App">
      <HashRouter>
        {/* <Provider store={store}> */}
        <Header />
        <Routes>
          <Route path="/" element={<WatchedList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
        {/* </Provider> */}
      </HashRouter>
    </div>
  );
}

export default App;
