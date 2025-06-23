import { useState } from "react";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="w-[600px] mx-auto flex items-center">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
