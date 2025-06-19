import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./navBar.tsx";
import HomeMenu from "./homeMenu.tsx";
import Login from "./Login.tsx";
import Footer from "./footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <HomeMenu />
    <Login />
    <Footer />
  </StrictMode>
);
