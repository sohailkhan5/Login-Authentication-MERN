import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login/index";
import SignUp from "./Component/SignUp";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path:"/home",
    element:<Home/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
