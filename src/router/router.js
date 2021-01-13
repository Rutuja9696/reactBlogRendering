import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import AllBlogs from "../pages/AllBlogs";
import DisplayBlog from "../pages/DisplayBlog";
class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/blogs" exact component={AllBlogs} />
            <Route path="/blogs/:id" exact component={DisplayBlog} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Router;
