import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { Layout } from "./components/Layout";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Provider store={store}>
          <App />
        </Provider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
