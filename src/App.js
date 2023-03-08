import React from "react";
import { Route, Switch } from "react-router-dom";
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
        {/* <Switch> */}
          {/* <Route path="/addlog"> */}
            <Index />
          {/* </Route>
          <Route path="/viewlogs"> */}
            <LogList />
          {/* </Route>
        </Switch> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
