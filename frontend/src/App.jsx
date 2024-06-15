import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Applayout from "./pages/Applayout";
import Home from "./pages/Home";
import SingleTask from "./pages/SingleTask";
import CreateTask from "./pages/CreateTask";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        cacheTime: 600 * 1000,
      },
    },
  });

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
        <Toaster
          position="top-right"
          reverseOrder=""
          false
          gutter={12}
          containerStyle={{ margin: "8px" }}
        />
      </QueryClientProvider>
    </div>
  );
};

export default App;
