import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import combineReducer from "./reducers/reducer.jsx";

import { Layout } from "./components/Layout";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
