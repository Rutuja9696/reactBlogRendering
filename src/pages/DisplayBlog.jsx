import { Component } from "react";
import url from "../components/ApiCall";
import Blog from "../components/Blog";
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
        console.log(data);
        this.setState({
          blog: data.data,
          status: "Successful",
          blogId: this.props.match.params.id,
        });
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
          blog: data.data,
          status: "Successful",
          blogId: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidUpdate = (event) => {
    if (this.state.blogId !== this.props.match.params.id) {
      if (this.state.status !== "") this.setState({ status: "" });
      fetch(url + this.props.match.params.id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            blog: data.data,
            status: "Successful",
            blogId: data.data.id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div>
        <h1>display Blog</h1>
        <Blog
          blog={this.state.blog}
          status={this.state.status}
          blogById={this.blogById}
          {...this.props}
        />
      </div>
    );
  }
}
export default DisplayBlog;
