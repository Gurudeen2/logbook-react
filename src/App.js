import React, { Suspense, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const Index = React.lazy(() => import("./components/Register/Index"));
const LogList = React.lazy(() => import("./components/Footer/Footer"));
const Login = React.lazy(() => import("./components/Admin/Login/Login"));
const ForgetPassword = React.lazy(() =>
  import("./components/Admin/ForgetPassword/ForgetPassword")
);
const PageNotFound = React.lazy(() =>
  import("./components/Pages/PageNotFound")
);
function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header title="LogBook" />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/addlog" />
          </Route>
          <Route path="/addlog">
            <Index />
          </Route>

          <Route path="/viewlogs">
            {authCtx.isLoggedIn && <LogList />}
            {!authCtx.isLoggedIn && <Redirect to="/admin/login" />}
          </Route>

          {!authCtx.isLoggedIn && (
            <Route path="/admin/login">
              <Login />
            </Route>
          )}

          <Route path="/admin/forgetpassword">
            <ForgetPassword />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
