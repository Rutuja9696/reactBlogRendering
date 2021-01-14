import { Component } from "react";
import { Link } from "react-router-dom";
import url from "../components/ApiCall";
import AllBlogCards from "../components/AllBlogCards";
class AllBlogs extends Component {
  state = {
    blogs: [],
    status: "",
  };
  componentDidMount = (event) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ blogs: data.blogData, status: "Successful" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>My Blogs</h1>
        <div>
          {this.state.blogs.map((blog, i) => {
            return (
              <div key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <AllBlogCards blog={blog} i={i + 1} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default AllBlogs;
