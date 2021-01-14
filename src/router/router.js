import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import AllBlogs from "../pages/AllBlogs";
import DisplayBlog from "../pages/DisplayBlog";
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
            <Route path="/" exact component={AllBlogs} />
            <Route path="/blogs/:id" exact component={DisplayBlog} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
export default Router;
