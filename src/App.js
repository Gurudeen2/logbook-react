import React, { Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import AuthContext from "./components/store/auth-context";

const Index = React.lazy(() => import("./components/Register/Index"));
const LogList = React.lazy(() => import("./components/Admin/LogList"));
const Login = React.lazy(() => import("./components/Admin/Login/Login"));
const ForgetPassword = React.lazy(() =>
  import("./components/Admin/ForgetPassword/ForgetPassword")
);
const PageNotFound = React.lazy(() =>
  import("./components/Pages/PageNotFound")
);

const Spinner = React.lazy(() => import("./components/UI/Spinner"));

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Suspense fallback={<Spinner />}>
      <Header title="LogBook" />
      <main>
        <Switch>
          <Route path="/addlog">
            <Index />
          </Route>

          <Route path="/" exact>
            {authCtx.isLoggedIn && <LogList />}
            {!authCtx.isLoggedIn && <Login />}
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
