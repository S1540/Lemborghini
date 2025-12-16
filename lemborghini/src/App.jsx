import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import HomePage from "./components/Home/HomePage";
import Footer from "./Footer";

function App() {
  const modelRef = useRef(null);
  const configureRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        modelRef={modelRef}
        configureRef={configureRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <Home />
      <HomePage
        modelRef={modelRef}
        configureRef={configureRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <Footer />
    </>
  );
}

export default App;
