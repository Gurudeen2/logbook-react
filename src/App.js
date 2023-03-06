import React from "react";
import Header from "./components/Header/Header";
import Index from "./components/Register/Index";
import LogList from "./components/Admin/LogList";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header title="LogBook" />
      <main>
        {/* <Index /> */}
        <LogList />
        <Footer />
      </main>
    </>
  );
}

export default App;
