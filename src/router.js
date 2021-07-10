import {  BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Employeeportal from "./components/Employeeportal";
import Employeelist from "./components/Employeelist";
import Employeedetails from "./components/Employeedetail";
import Logout from "./components/Logout";
import Login from "./components/Login";


export const routing = (
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home" activeClassName="btn btn-primary">
               Employee Portal
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/home" >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " to="/list" activeClassName="btn btn-primary">
              Employee List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/details" activeClassName="btn btn-primary">
              Employee Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/logout" activeClassName="btn btn-primary">
              logout
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/login" activeClassName="btn btn-primary">
              login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <Switch>

    <Route path="/home" component={Employeeportal } />
    <Route path="/list" component={Employeelist}  />
    <Route path="/details" component={Employeedetails}  />
    <Route path="/logout" component={Logout}  />
    <Route path="/login" component={Login}  />
    </Switch>
  </BrowserRouter>
);