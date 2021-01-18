import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import AllBlogs from "../pages/AllBlogs";
import DisplayBlog from "../pages/DisplayBlog";
import PageNotFound from "../pages/404NotFoundPg";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/blogs" exact component={AllBlogs} />
            <Route path="/blogs/:id" exact component={DisplayBlog} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
export default Router;
