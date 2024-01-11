import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import "./index.css";
import GlobalContextProvider from "./cotexts/GlobalContextProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
