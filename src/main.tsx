import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./navBar.tsx";
import HomeMenu from "./homeMenu.tsx";
import Login from "./login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <HomeMenu />
    <Login />
  </StrictMode>
);
