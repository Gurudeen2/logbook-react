import React from "react";
import Header from "./components/Header/Header";
import Index from "./components/Register/Index";
import "./App.css";

function App() {
  return (
    <>
      <Header title="LogBook" />
      <main>
        <Index />
      </main>
    </>
  );
}

export default App;
