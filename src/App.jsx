import "./App.css";
import LoginandSignup from "./Components/LoginandSignup/LoginandSignup";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
