import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import AllBlogs from "../pages/AllBlogs";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Router;
