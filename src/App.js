import React from "react";
import Header from "./components/Header/Header";
import SignForm from "./components/Register/SignForm";
import "./App.css";

function App() {
  return (
    <>
      <Header title="LogBook" />
      <main>
        <SignForm />
      </main>
    </>
  );
}

export default App;
