import { Component } from "react";
import { Link } from "react-router-dom";
import url from "../components/ApiCall";

class AllBlogs extends Component {
  state = {
    blogs: [],
    status: "",
  };
  render() {
    return (
      <div>
        <h1>all blogs</h1>
      </div>
    );
  }
}
export default AllBlogs;
