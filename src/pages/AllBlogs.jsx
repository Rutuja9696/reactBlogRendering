import { Component } from "react";
import { Link } from "react-router-dom";
import url from "../components/ApiCall";
import AllBlogCards from "../components/AllBlogCards";
class AllBlogs extends Component {
  state = {
    blogs: [],
    status: "",
  };
  render() {
    return (
      <div>
        <h1>all blogs</h1>
        <AllBlogCards />
      </div>
    );
  }
}
export default AllBlogs;
