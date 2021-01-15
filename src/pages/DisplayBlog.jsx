import { Component } from "react";
import url from "../components/ApiCall";
import Blog from "../components/Blog";
class DisplayBlog extends Component {
  state = {
    blog: [],
    status: "",
    blogId: "",
  };
  render() {
    return (
      <div>
        <h1>display Blog</h1>
        <Blog />
      </div>
    );
  }
}
export default DisplayBlog;
