import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import Home from "./pages/Home";
import SingleTask from "./pages/SingleTask";
import CreateTask from "./pages/CreateTask";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/singletask/:id" element={<SingleTask />} />
            <Route path="/createtask" element={<CreateTask />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
