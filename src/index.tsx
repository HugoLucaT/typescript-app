import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);*/

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Name from "./components/Name";
import HomePage from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/typescript-app" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="contact" element={<Name title="Hugo Luca" />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
