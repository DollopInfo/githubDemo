import { useEffect, useState } from "react";
import "./App.css";
import CC from "./components/CC";
import Header from "./components/header";
import Interests from "./components/Interests/Interests";
import ReducerDemo from "./components/ReducerDemo";
import { UserProvider } from "./context/userContext";
import MainLayout from "./layouts/MainLayout";
function App() {
 
  return (
    <div>
      <Interests/>
    </div>
  );
}

export default App;
