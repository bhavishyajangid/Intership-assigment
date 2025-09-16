import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Signup from "./pages/auth/Signup.jsx";
import Login from "./pages/auth/Login.jsx";
import Home from "./pages/Dashboard/Home/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ChatBox from "./pages/Dashboard/Home/ChatBox.jsx";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<ChatBox />} />
        </Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
);
