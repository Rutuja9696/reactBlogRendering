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
    fetch(url, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ blogs: data.data, status: "Successful" });
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
          {this.state.blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <AllBlogCards blog={blog} />
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
