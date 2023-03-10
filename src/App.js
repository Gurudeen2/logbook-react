import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Index from "./components/Register/Index";
import LogList from "./components/Admin/LogList";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/Pages/PageNotFound";
import "./App.css";
import Login from "./components/Admin/Login/Login";

function App() {
  return (
    <>
      <Header title="LogBook" />
      <main>
        <Switch>
          <Route path="/addlog">
            <Index />
          </Route>
          <Route path="/viewlogs">
            <LogList />
          </Route>
          <Route path="/admin/login">
            <Login />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
