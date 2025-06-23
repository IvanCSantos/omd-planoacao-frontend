import { useState } from "react";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-[700px] mx-auto flex flex-1 items-center">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
