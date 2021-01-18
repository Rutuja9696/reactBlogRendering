import { Component } from "react";
import { Link } from "react-router-dom";
import url from "../components/ApiCall";
import AllBlogCards from "../components/AllBlogCards";
import AllBlogsStyles from "../styles/AllBlogs.module.css";

//page displaying all blog cards
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
      <div className={AllBlogsStyles.container}>
        {this.state.blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <Link className={AllBlogsStyles.link} to={`/blogs/${blog.id}`}>
                <AllBlogCards blog={blog} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default AllBlogs;
