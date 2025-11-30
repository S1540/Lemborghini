import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import HomePage from "./components/Home/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <HomePage />
    </>
  );
}

export default App;
