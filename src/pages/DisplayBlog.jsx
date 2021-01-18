import { Component } from "react";
import url from "../components/ApiCall";
import Blog from "../components/Blog.jsx";
import BlogStyles from "../styles/Blog.module.css";
import PageNotFound from "../pages/404NotFoundPg";
class DisplayBlog extends Component {
  state = {
    blog: [],
    status: "",
    blogId: "",
  };
  componentDidMount = (event) => {
    fetch(url + this.props.match.params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data)
          this.setState({
            blog: data.data[0],
            status: "Successful",
            blogId: this.props.match.params.id,
          });
        else {
          this.setState({ status: "Successful" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //fetch blog by id
  blogById = (id) => {
    fetch(url + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          blog: data.data[0],
          status: "Successful",
          blogId: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className={BlogStyles.container}>
        {this.state.status === "" ? (
          <h1>Loading...</h1>
        ) : this.state.status === "Successful" &&
          this.state.blog.length !== 0 ? (
          <Blog
            blog={this.state.blog}
            status={this.state.status}
            blogById={this.blogById}
            {...this.props}
          />
        ) : (
          <PageNotFound />
        )}
      </div>
    );
  }
}
export default DisplayBlog;
