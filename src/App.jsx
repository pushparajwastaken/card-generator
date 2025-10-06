import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./Components/Input/Input";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="w=flex h-screen">
      <Input />
      <Card />
    </div>
  );
}
export default App;
