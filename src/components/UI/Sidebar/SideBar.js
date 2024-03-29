import React, { useContext } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Sidebar = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div
      style={{
        display: "flex",
        height: "55rem",
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#8a2b06">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            LogBook
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/viewlogs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View Logs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/viewmember" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                View Registered CM
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registercm" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                Register CM
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                Sign In/Out
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <CDBSidebarMenuItem icon="chart-line" onClick={authCtx.logout}>
              LOGOUT
            </CDBSidebarMenuItem>
          </CDBSidebarFooter>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
