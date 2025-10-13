import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./Components/Input/Input";
import Card from "./Components/Card/Card";
import { Outlet } from "react-router-dom";
function App() {
  const [input, setInnput] = useState("");
  return (
    <div className="w=flex h-screen">
      <Outlet context={{ input, setInnput }} />
    </div>
  );
}
export default App;
