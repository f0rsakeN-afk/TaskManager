import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import Home from "./pages/Home";
import SingleTask from "./pages/SingleTask";
import CreateTask from "./pages/CreateTask";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
      </QueryClientProvider>
    </div>
  );
};

export default App;
