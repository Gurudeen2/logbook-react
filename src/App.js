import React, { Suspense, useContext } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import AuthContext from "./components/store/auth-context";
import NewUser from "./components/Register/NewUser/NewUser";
import ViewMember from "./components/Admin/ViewMember/ViewNewMember";
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
  const { pathname } = useLocation();

  const addsigin = pathname.match("/");
  const login = pathname.match("/admin/login");
  const registercm = pathname.match("/registercm");
  const forgetpass = pathname.match("/admin/forgetpassword");

  let sidebarCondition = false;

  if (!addsigin || !login || !registercm || !forgetpass) sidebarCondition = true;

  return (
    <Suspense fallback={<Spinner />}>
      <Header title="LogBook" />

      <div className="grid">
        {authCtx.isLoggedIn && sidebarCondition && <Sidebar />}

        <main>
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route path="/registercm" exact>
              <NewUser />
            </Route>

            <Route path="/viewmember">
              {authCtx.isLoggedIn && <ViewMember />}
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
              {!authCtx.isLoggedIn && <ForgetPassword />}
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
