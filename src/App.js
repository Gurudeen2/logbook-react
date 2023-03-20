import React, { Suspense, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import AuthContext from "./components/store/auth-context";
import NewUser from "./components/Admin/NewUser/NewUser";
const Index = React.lazy(() => import("./components/Register/Index"));
const LogList = React.lazy(() => import("./components/Admin/LogList"));
const Login = React.lazy(() => import("./components/Admin/Login/Login"));
const Sidebar = React.lazy(() => import("./components/UI/Sidebar/SideBar"));
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
      <NewUser />
      {/* <div className="grid">
        {authCtx.isLoggedIn && <Sidebar />}

        <main>
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>

            <Route path="/viewlogs" exact>
              {authCtx.isLoggedIn && <LogList />}
              {!authCtx.isLoggedIn && <Redirect to="/admin/login" exact />}
            </Route>

            <Route path="/admin/login" exact>
              {!authCtx.isLoggedIn && <Login />}
              {authCtx.isLoggedIn && <Redirect to="/viewlogs" exact />}
            </Route>

            <Route path="/admin/forgetpassword">
              <ForgetPassword />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </div> */}
      <Footer />
    </Suspense>
  );
}

export default App;
